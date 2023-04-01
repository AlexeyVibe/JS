import {
    Body,
    Controller,
    Delete,
    Get, HttpStatus, Options,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors, UsePipes
} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreatePostDto} from "./dto/create-post.dto";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {ValidationPipe} from "../pipes/validation.pipe";


@ApiTags('Текстовый блок')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Создание текстового блока'})
    @ApiResponse({status:200,type:[CreatePostDto]})
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    @UsePipes(ValidationPipe)
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.postService.create(dto, image)
    }

    @ApiOperation({summary: 'Изменение текстового блока'})
    @ApiResponse({status:200,type:[CreatePostDto]})
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @UseInterceptors(FileInterceptor('image'))
    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updatePost(@Param('id') id: number,@Body() dto: CreatePostDto,
               @UploadedFile() image:any) {
        return this.postService.update(id,dto, image !== undefined ? image : null)
    }

    @ApiOperation({summary: 'Получение всех текстовых блоков'})
    @ApiResponse({status:200,type:[CreatePostDto]})
    @Get()
    getAll(){
        return this.postService.getAll();
    }

    @ApiOperation({summary: 'Удаление текстового блока'})
    @ApiResponse({status:200})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.postService.delete(id);
        return HttpStatus.OK;
    }

    @ApiOperation({summary: 'Получение текстового блока по группе'})
    @ApiResponse({status:200,type:CreatePostDto})
    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.postService.findByGroup(value);
    }

}
