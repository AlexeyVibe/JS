import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';
import {InjectModel} from "@nestjs/sequelize";
import {File} from "./files.model";
import {Op} from "sequelize";

@Injectable()
export class FilesService {

    constructor(@InjectModel(File) private fileRepository:typeof File) {
    }

    async createFile(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', 'static')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            await this.fileRepository.create({filename: fileName})
            return fileName;
        } catch (e) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async findByID(id:number){
        return await this.fileRepository.findOne({where:{id}})
    }

    async setEssence(filename:string,essence:string,id:number){
        await this.fileRepository.update({essenceTable:essence,essenceId:id},{where:{filename:filename}})
    }

    async findByName(name:string){
        return await this.fileRepository.findOne({where:{filename:name}});
    }

    async delete(){
        const oneHourAgo = new Date(new Date().getTime() - 60 * 60 * 1000);

        const unusedFiles = await this.fileRepository.findAll({
            where: {
                [Op.or]: [
                    { essenceTable: null, essenceId: null },
                    { createdAt: { [Op.lt]: oneHourAgo } },
                ],
            },
        });

        await Promise.all(
            unusedFiles.map((file) => {
                const filePath = path.join(__dirname, '..', 'static', file.filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
                return file.destroy();
            }),
        );
    }

}
