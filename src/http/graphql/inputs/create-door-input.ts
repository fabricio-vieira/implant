import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateDoorInput {
    @Field()
    title: string

    @Field()
    project_id: string

    @Field()
    range: number

    @Field()
    inside: boolean

    @Field()
    exit_control: boolean
}
