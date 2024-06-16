import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class CreatePlanInput {
    @Field()
    title: string

    @Field()
    license_cost: number
}