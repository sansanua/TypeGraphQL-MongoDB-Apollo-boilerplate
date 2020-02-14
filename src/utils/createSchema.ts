import { buildSchema } from 'type-graphql';

import { RegisterResolver } from './../modules/user/Register';
import { MeResolver } from './../modules/user/Me';
import { LogoutResolver } from './../modules/user/Logout';
import { LoginResolver } from './../modules/user/Login';
import { ForgotPasswordResolver } from './../modules/user/ForgotPassword';
import { CreateUserResolver } from './../modules/user/CreateUser';
import { ConfirmUserResolver } from './../modules/user/ConfirmUser';
import { ChangePasswordResolver } from './../modules/user/ChangePassword';

export const createSchema = () =>
    buildSchema({
        resolvers: [
            ChangePasswordResolver,
            ConfirmUserResolver,
            CreateUserResolver,
            ForgotPasswordResolver,
            LoginResolver,
            LogoutResolver,
            MeResolver,
            RegisterResolver,
        ],
        authChecker: ({ context: { req } }) => {
            return !!req.session.userId;
        },
    });
