import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import slugify from "slugify";

interface CreateDoorType {
    title: string
    project_id: string
    range: number
    inside: boolean
    exit_control: boolean
}

@Injectable()
export class DoorService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async listDoors() {
        return this.prismaService.door.findMany()
    }

    async getDoorsByProjectId(project_id: string) {
        return this.prismaService.door.findMany({
            where: {
                project_id,
            }
        })
    }

    async create({ title, project_id, range, inside, exit_control }: CreateDoorType) {
        const slug = slugify(title, {
            lower: true,
        })

        const check_doors = await this.prismaService.door.findMany({
            where: {
                project_id: project_id,
                slug: slug
            }
        })

        if (check_doors.length > 0) {
            throw new Error("Door already registered")
        }

        return await this.prismaService.door.create({
            data: {
                title,
                slug,
                project_id,
                range,
                inside,
                exit_control
            }
        })
    }

}