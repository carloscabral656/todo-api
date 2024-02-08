import { Injectable, Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class TasksService {

    constructor(
        private prismaService: PrismaService
    ){}

    async getAll(): Promise<Task[]>{
        return this.prismaService.task.findMany();
    }

    async createTask(task: Prisma.TaskCreateInput): Promise<Task>{
        const createTask = await this.prismaService.task.create({
            data: {
                title: task.title,
                description: task.description,
                duration: Number(task.duration)
            }
        });
        return createTask;
    }

    async updateTask(id: number, task: Prisma.TaskUpdateInput): Promise<Task> {
        const updateTask = await this.prismaService.task.update({
            where: {
                id: Number(id)
            },
            data: {
                title: task.title,
                description: task.description,
                duration: Number(task.duration)
            }
        });
        return updateTask;
    }

    async getTask(id: number){
        const task = await this.prismaService.task.findUnique({
            where: {
                id: Number(id)
            }
        });
        return task ? task : {};
    }

    async deleteTask(@Param('id') id: number){
        const task = await this.prismaService.task.delete({
            where: {
                id: Number(id)
            }
        });
        return task;
    }

}
