import { Entity, Column, BaseEntity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    id: ObjectID;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column('text', { unique: true })
    email: string;

    @Field()
    name: string;

    @Column()
    password: string;
}
