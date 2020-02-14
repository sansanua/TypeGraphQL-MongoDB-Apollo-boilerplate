import { ObjectID } from 'typeorm';
const mongoObjectID = require('mongodb').ObjectID;

export function getObjectId(id: string | number): ObjectID {
    return mongoObjectID.createFromHexString(id);
}

export function byId(id: string | number) {
    return { id: getObjectId(id) };
}
