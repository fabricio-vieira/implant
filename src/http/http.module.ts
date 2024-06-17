import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from 'src/database/database.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ProjectResolver } from './graphql/resolvers/project.resolver'
import { ProjectService } from './graphql/project/project.service'
import { join } from 'path'
import { PlanResolver } from './graphql/resolvers/plan.resolver'
import { PlanService } from './graphql/project/plan.service'
import { DoorService } from './graphql/project/door.service'
import { DoorResolver } from './graphql/resolvers/door.resolver'

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
    ],
    providers: [
        // Resolvers
        ProjectResolver,
        PlanResolver,
        DoorResolver,

        //Services
        ProjectService,
        PlanService,
        DoorService

    ]
})
export class HttpModule { }
