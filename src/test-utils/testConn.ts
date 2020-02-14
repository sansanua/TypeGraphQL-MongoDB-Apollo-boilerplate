import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) => {
    return createConnection({
        name: 'default',
        type: 'mongodb',
        url: "mongodb://<userName>:<password>@ds211709.mlab.com:11709/<dbNameTest>",

        useUnifiedTopology: true,
        useNewUrlParser: true,
        synchronize: drop,
        dropSchema: drop,

        entities: [__dirname + '/../entity/*.*'],
    });
};
