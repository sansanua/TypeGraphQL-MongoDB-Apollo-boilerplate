import { ObjectID } from 'typeorm';
import { v4 } from 'uuid';

import { redis } from '../../redis';

export const createConfirmationUrl = async (userId: ObjectID) => {
    const token = v4();

    await redis.set(token, userId.toHexString(), 'ex', 60 * 60 * 24); // 1 day expiration

    return `http://localhost:3000/user/confirm/${token}`;
};
