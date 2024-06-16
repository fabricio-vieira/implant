import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface CreatePlanParans {
    title: string
    license_cost: number
}

@Injectable()
export class PlanService {
    constructor(private prismaService: PrismaService) { }

    listPlans() {
        return this.prismaService.plan.findMany()
    }

    getPlanById(id: string) {
        return this.prismaService.plan.findUnique({
            where: {
                id,
            }
        })
    }

    async create({ title, license_cost }: CreatePlanParans) {
        const check_plan = await this.prismaService.plan.findFirst({
            where: {
                title,
            }
        })

        if (check_plan) {
            throw new Error('Has already a project plan')
        }

        return await this.prismaService.plan.create({
            data: {
                title,
                license_cost
            }
        })
    }
}