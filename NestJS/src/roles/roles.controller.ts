import {Body, Controller, Get, Param, Post, UsePipes} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Role} from "./roles.model";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Роли')
@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status:200})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.roleService.createRole(dto);
    }

    @ApiOperation({summary: 'Получение роли по имени'})
    @ApiResponse({status:200,type:Role})
    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.roleService.getRoleByValue(value);
    }
}
