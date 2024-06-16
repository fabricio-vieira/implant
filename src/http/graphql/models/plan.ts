import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Project } from './project'

@ObjectType()
export class Plan {
    @Field(() => ID)
    id: string

    @Field()
    title: string

    @Field()
    license_cost: number

}