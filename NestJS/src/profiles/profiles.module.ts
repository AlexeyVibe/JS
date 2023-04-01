import {forwardRef, Module} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-role";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {Profile} from "./profiles.model";
import {UsersService} from "../users/users.service";
import {UsersModule} from "../users/users.module";

@Module({
  providers: [ProfilesService],
  controllers: [ProfilesController],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles,Profile]),
    RolesModule,
    forwardRef(() => AuthModule),
    forwardRef(() => UsersModule)
  ],
})
export class ProfilesModule {}
