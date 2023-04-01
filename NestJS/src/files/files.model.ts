import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface FileCreationAttrs {
    filename: string;
}


@Table({tableName: 'files'})
export class File extends Model<File,FileCreationAttrs>{
    @ApiProperty({example:'1', description:'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example:'3e9126f6-191c-423b-a028-8e1bf0ad69f2.jpg', description:'имя картинки(генерируется автоматически)'})
    @Column({type:DataType.STRING, allowNull:false})
    filename: string;

    @ApiProperty({example:'post', description:'Сущность в которой используется картинка'})
    @Column({type:DataType.STRING})
    essenceTable: string;

    @ApiProperty({example:'1', description:'id сущности'})
    @Column({type:DataType.INTEGER})
    essenceId: number;
}