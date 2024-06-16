import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PlanService } from "../project/plan.service"
import { Plan } from "../models/plan";
import { CreatePlanInput } from "../inputs/create-plan-input";

@Resolver()
export class PlanResolver {
    constructor(private planService: PlanService) { }

    @Query(() => [Plan])
    plans() {
        return this.planService.listPlans()
    }

    @Mutation(() => Plan)
    create_plan(
        @Args('data') data: CreatePlanInput) {
        return this.planService.create(data)
    }
}