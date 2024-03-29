import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';

@Module({
    imports: [],
    providers: [TasksService, TasksRepository],
    controllers: [TasksController]
})
export class TasksModule {
    
}
