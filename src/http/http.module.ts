import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ProjectController } from './project/project.controller'
import { ProjectService } from './project/project.service'

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class HttpModule { }
