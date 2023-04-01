import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


interface PostCreationAttrs {
    title: string;
    content: string;
    image: string;
    searchName: string;
    group: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example:'1', description:'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example:'Имя поста', description:'Название'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example:'Текст поста', description:'Содержание'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example:'main-hero-text', description:'уникальное название для поиска'})
    @Column({type:DataType.STRING})
    searchName: string;

    @ApiProperty({example:'main-page', description:'группа'})
    @Column({type:DataType.STRING})
    group: string;

    @ApiProperty({example:'3e9126f6-191c-423b-a028-8e1bf0ad69f2.jpg', description:'имя картинки(генерируется автоматически)'})
    @Column({type: DataType.STRING})
    image: string;

}