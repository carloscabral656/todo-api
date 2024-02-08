import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(
        private readonly tasksService: TasksService
    ){}

    @Get()
    public findAll(){
        return this.tasksService.getAll();
    }

    @Post()
    public create(@Body() taskData: any){
        return this.tasksService.createTask(taskData);
    }

    @Put(':id')
    public updateTask(@Param('id') id: number, @Body() taskData: any){
        return this.tasksService.updateTask(id, taskData);
    }

    @Get(':id')
    public findTask(@Param('id') id: number){
        return this.tasksService.getTask(id);
    }

    @Delete(':id')
    public deleteTask(@Param('id') id: number){
        return this.tasksService.deleteTask(id);
    }

}
