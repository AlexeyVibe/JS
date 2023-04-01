import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthDto} from "./dto/auth.dto";

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @ApiOperation({summary: 'Login'})
    @ApiResponse({status:200})
    @Post('/login')
    login(@Body() dto: AuthDto){
        return this.authService.login(dto)
    }

}
