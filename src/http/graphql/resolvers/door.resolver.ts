import { Args, Resolver, Query, Mutation, Parent, ResolveField } from "@nestjs/graphql";
import { Door } from "../models/door";
import { Project } from "../models/project"
import { DoorService } from "../project/door.service";
import { ProjectService } from "../project/project.service";
import { CreateDoorInput } from "../inputs/create-door-input";

@Resolver(() => Door)
export class DoorResolver {
    constructor(
        private doorService: DoorService,
        private projectService: ProjectService
    ) { }

    @Query(() => [Door])
    doors() {
        return this.doorService.listDoors()
    }

    @Query(() => [Door])
    doorsByProjectId(
        @Args('project_id') project_id: string) {
        return this.doorService.getDoorsByProjectId(project_id)
    }

    @ResolveField(() => Project)
    door(@Parent() door: Door) {
        return this.projectService.getProjectById(door.project_id)
    }

    @Mutation(() => Door)
    create_door(
        @Args('data') data: CreateDoorInput) {
        return this.doorService.create(data)
    }


}