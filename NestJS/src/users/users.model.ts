import {BelongsToMany, Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-role";
import {Profile} from "../profiles/profiles.model";

interface UserCreationAtt {
    email: string;
    password: string;
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAtt> {
    @ApiProperty({example:'1', description:'Уникальный идентификатор'})
    @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number

    @ApiProperty({example:'example@mail.ru', description:'Почтовый ящик'})
    @Column({type:DataType.STRING, unique:true, allowNull:false})
    email:string

    @ApiProperty({example:'123456', description:'Пароль'})
    @Column({type:DataType.STRING, allowNull:false})
    password:string

    @BelongsToMany(() => Role,() => UserRoles)
    roles:Role[]

    @HasOne(() => Profile)
    profile: Profile;
}