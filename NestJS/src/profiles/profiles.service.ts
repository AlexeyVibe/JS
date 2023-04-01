import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Profile} from "./profiles.model";
import {RolesService} from "../roles/roles.service";
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "../auth/auth.service";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class ProfilesService {

    constructor(@InjectModel(Profile) private profileRepository: typeof Profile,
                private roleService: RolesService, private userService: UsersService,
                private authService: AuthService) {
    }

    async createUser(dto: CreateUserDto) {
        await this.authService.registration(dto);
        const user = await this.userService.getUserByEmail(dto.email);
        const profile = await this.profileRepository.create(dto);
        await this.profileRepository.update({userId: user.id}, {where:{ id:profile.id }});
        const role = await this.roleService.getRoleByValue('USER');
        await user.$set('roles',[role.id]);
        user.roles = [role];
        user.profile = profile;
        return user;
    }

    async update(id:number, dto: CreateUserDto){
        const hashPassword = await bcrypt.hash(dto.password, 5);
        await this.userService.updateUser(id,{...dto, password: hashPassword})
        const upuser = await this.userService.getUserByEmail(dto.email);
        await this.profileRepository.update({...dto}, {where:{ id:upuser.profile.id }});
    }

    async delete(id:number){
        const user = await this.userService.findById(id);
        await this.profileRepository.destroy( {where:{ id:user.profile.id }});
        await this.userService.deleteUser(id);
    }
}
