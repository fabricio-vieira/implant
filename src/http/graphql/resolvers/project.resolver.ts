import { Resolver, Query, Mutation, Parent, Args, ResolveField } from '@nestjs/graphql';
import { ProjectService } from '../project/project.service';
import { PlanService } from '../project/plan.service';
import { Project } from '../models/project';
import { Plan } from '../models/plan';
import { CreateProjectInput } from '../inputs/create-project-input';

@Resolver(() => Project)
export class ProjectResolver {
    constructor(
        private projectService: ProjectService,
        private planService: PlanService
    ) { }

    @Query(() => [Project])
    projects() {
        return this.projectService.listProjects()
    }

    @Mutation(() => Project)
    create_project(
        @Args('data') data: CreateProjectInput) {
        return this.projectService.create(data)
    }

    @ResolveField(() => Plan, { nullable: true })
    plan(@Parent() project: Project) {
        return this.planService.getPlanById(project.plan_id)
    }
}

