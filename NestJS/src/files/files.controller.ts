import {Controller, Delete, HttpStatus, Param, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {FilesService} from "./files.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {File} from "./files.model";
import {CreatePostDto} from "../posts/dto/create-post.dto";


@ApiTags('Работа с фаилом')
@Controller('files')
export class FilesController {

    constructor(private fileService: FilesService) {
    }

    @ApiOperation({summary: 'Загрузка картинки'})
    @ApiResponse({status:200})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async create(@UploadedFile() image){
        const filename = await this.fileService.createFile(image);
        return "http://localhost:7000/" + filename;
    }

    @ApiOperation({summary: 'Удаление всех лишние файлы\n' +
            '- прошло больше часа с момента создания\n' +
            '- нигде не используется (essenceId/essenceTable пустые)'})
    @ApiResponse({status:200})
    @Delete()
    async delete() {
        await this.fileService.delete();
        return HttpStatus.OK;
    }
}
