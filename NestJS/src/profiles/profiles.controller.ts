import {
    Body,
    Controller,
    Delete,
    HttpStatus,
    Param,
    Patch,
    Post,
    UseGuards,
    UseInterceptors,
    UsePipes
} from '@nestjs/common';
import {ProfilesService} from "./profiles.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ValidationPipe} from "../pipes/validation.pipe";
import {SelfOrAdminInterceptor} from "../auth/auth.middleware";


@ApiTags('Профиль')
@Controller('profiles')
export class ProfilesController {

    constructor(private profileService: ProfilesService) {
    }

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status:200,type:CreateUserDto})
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() userDto: CreateUserDto){
        return this.profileService.createUser(userDto);
    }

    @ApiOperation({summary: 'Изменения пользователя'})
    @ApiResponse({status:200})
    @UseInterceptors(SelfOrAdminInterceptor)
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    @Patch('/:id')
    async update(@Param('id') id: number, @Body() dto: CreateUserDto) {
        await this.profileService.update(id,dto);
        return HttpStatus.OK;
    }

    @ApiOperation({summary: 'Удаление пользователя'})
    @ApiResponse({status:200})
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(SelfOrAdminInterceptor)
    @UsePipes(ValidationPipe)
    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.profileService.delete(id);
        return HttpStatus.OK;
    }

}
