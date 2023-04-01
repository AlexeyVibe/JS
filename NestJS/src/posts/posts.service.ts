import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {CreatePostDto} from "./dto/create-post.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private filesService: FilesService) {}

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.filesService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName});
        await this.filesService.setEssence(fileName, 'posts',post.id);
        return post;
    }

    async update(id:number,dto: CreatePostDto, image: any) {

        const post = await this.postRepository.findOne({where:{id}});
        await this.postRepository.update({...dto, image: post.image},{where:{id}});
        const uppost = await this.postRepository.findOne({where:{id}});
        if(image){
            await this.filesService.setEssence(post.image, null,null);
            const fileName = await this.filesService.createFile(image);
            await this.filesService.setEssence(fileName, 'posts',uppost.id);
        }
        return uppost;
    }

    async delete(id:number){
        const post = await this.postRepository.findOne({where:{id}});
        await this.filesService.setEssence(post.image, null,null);
        await this.postRepository.destroy({where:{ id }});
    }

    async getAll(){
        const posts = await this.postRepository.findAll();
        return posts;
    }

    async findByGroup(group:string){
        const post = await this.postRepository.findOne({where:{group}, include:{all:true}});
        return post;
    }
}
