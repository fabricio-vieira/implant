import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Project } from './project'


@ObjectType()
export class Door {
    @Field(() => ID)
    id: string

    @Field()
    project_id: string

    @Field()
    title: string

    @Field()
    slug: string

    @Field()
    range: number

    @Field()
    exit_control: boolean

    @Field()
    inside: boolean

}
