import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class CreateProjectInput {
    @Field()
    name: string

    @Field()
    plan_id: string

    @Field()
    has_monit: boolean
}