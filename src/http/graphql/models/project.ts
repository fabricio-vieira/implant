import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Plan } from './plan'

@ObjectType()
export class Project {
    @Field(() => ID)
    id: string

    @Field()
    name: string

    @Field()
    slug: string

    @Field()
    plan_id: string

    @Field()
    gestor_validate: boolean

    @Field()
    aproved: boolean

    @Field()
    has_monit: boolean

    @Field()
    created_at: Date

    @Field(() => Plan, { nullable: true })
    plan: Plan

}