import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto, FindOneTaskDto, UpdateTaskDto } from './dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async findAll() {
    return await this.service.findAll()
  }

  @Get(':id')
  async findOne(@Param() { id }: FindOneTaskDto) {
    return await this.service.findOne(id)
  }

  @Post()
  async create(@Body() dto: CreateTaskDto) {
    return await this.service.create(dto)
  }

  @Put(':id')
  async update(
    @Param() { id }: FindOneTaskDto,
    @Body() dto: UpdateTaskDto,
  ) {
    return await this.service.update(id, dto)
  }
}
