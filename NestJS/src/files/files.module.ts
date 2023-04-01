import {forwardRef, Module} from '@nestjs/common';
import { FilesService } from './files.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-role";
import {Profile} from "../profiles/profiles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";
import {File} from "./files.model";
import { FilesController } from './files.controller';

@Module({
  providers: [FilesService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles,Profile,File]),
    RolesModule,
    forwardRef(() => AuthModule),
    forwardRef(() => UsersModule)
  ],
  exports:[FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
