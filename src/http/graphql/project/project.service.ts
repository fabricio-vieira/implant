import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from 'src/database/prisma/prisma.service';


interface CreateProjectParams {
    name: string
    plan_id: string
    has_monit: boolean
}

@Injectable()
export class ProjectService {
    constructor(private prismaService: PrismaService) { }
    listProjects() {
        return this.prismaService.project.findMany({
            include: { Plan: true }
        })
    }
    getProjectById(id: string) {
        return this.prismaService.project.findUnique({
            where: {
                id,
            }
        })
    }

    getDoors(project_id: string) {
        return this.prismaService.door.findMany({
            where: {
                project_id,
            }
        })
    }

    async create({ name, plan_id, has_monit }: CreateProjectParams) {
        const slug = slugify(name, {
            lower: true,
        })

        const check_project_slug = await this.prismaService.project.findUnique({
            where: {
                slug,
            }
        })

        if (check_project_slug) {
            throw new Error('Has already a project slug')
        }

        return await this.prismaService.project.create({
            data: {
                name,
                slug,
                plan_id,
                has_monit
            }
        })
    }
}
