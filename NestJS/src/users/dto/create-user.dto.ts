import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:'example@mail.ru', description:'Почтовый ящик'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;
    @ApiProperty({example:'123456', description:'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string;
    @ApiProperty({example:'Alex', description:'Имя пользователя'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string;
    @ApiProperty({example:'89271234567', description:'Номер телефона'})
    @IsString({message: 'Должно быть строкой'})
    @Length(11, 11, {message: 'Должен состоять из 11 цифр'})
    readonly phone: string;
}