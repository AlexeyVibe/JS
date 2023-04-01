import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreatePostDto {
    @ApiProperty({example:'Имя поста', description:'Название'})
    @IsString({message: 'Должно быть строкой'})
    readonly title: string;
    @ApiProperty({example:'Текст поста', description:'Содержание'})
    @IsString({message: 'Должно быть строкой'})
    readonly content: string;
    @ApiProperty({example:'main-hero-text', description:'уникальное название для поиска'})
    @IsString({message: 'Должно быть строкой'})
    readonly searchName: string;
    @ApiProperty({example:'main-page', description:'группа'})
    @IsString({message: 'Должно быть строкой'})
    readonly group: string;
}