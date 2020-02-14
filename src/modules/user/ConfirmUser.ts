import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { redis } from '../../redis';
import { byId } from '../utils/common';
import { confirmUserPrefix } from '../constants/redisPrefixes';

@Resolver()
export class ConfirmUserResolver {
    @Mutation(() => Boolean)
    async confirmUser(@Arg('token') token: string): Promise<boolean> {
        const userId = await redis.get(confirmUserPrefix + token);

        if (!userId) {
            return false;
        }

        await User.update(byId(userId), { confirmed: true });

        await redis.del(token);

        return true;
    }
}
