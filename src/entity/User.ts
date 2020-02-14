import { Entity, Column, BaseEntity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, ID, Root } from 'type-graphql';
import { Min } from 'class-validator';

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
    name(@Root() parent: User): string {
        return `${parent.firstName} ${parent.lastName}`;
    }

    @Column()
    @Min(5)
    password: string;

    @Column('bool', { default: false })
    confirmed: boolean;
}
