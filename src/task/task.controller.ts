import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async findAll() {
    return await this.service.findAll()
  }

  @Post()
  async create(@Body() dto: CreateTaskDto) {
    return await this.service.create(dto)
  }
}
