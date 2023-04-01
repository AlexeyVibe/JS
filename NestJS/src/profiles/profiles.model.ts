import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface ProfileCreationAtt {
    name: string;
    phone: string;
}

@Table({tableName:'profiles'})
export class Profile extends Model<Profile,ProfileCreationAtt>{

    @ApiProperty({example:'1', description:'Уникальный идентификатор'})
    @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number

    @ApiProperty({example:'Alex', description:'Имя пользователя'})
    @Column({type:DataType.STRING, allowNull:false})
    name: string;

    @ApiProperty({example:'89271234567', description:'Номер телефона'})
    @Column({type:DataType.STRING, allowNull:false})
    phone: string;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
}