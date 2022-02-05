import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateTaskDto, FindOneTaskDto, UpdateTaskDto } from './dto';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get('test')
  async test(@Res() res: Response) {
    const url = 'https://bit.ly/3J6qqdn'
    return res.redirect(url)
  }

  @Get()
  @ApiOkResponse({ type: [CreateTaskDto] })
  async findAll() {
    return await this.service.findAll()
  }

  @Get(':id')
  @ApiBadRequestResponse({ description: 'Validation issues' })
  @ApiNotFoundResponse()
  async findOne(@Param() { id }: FindOneTaskDto) {
    return await this.service.findOne(id)
  }

  @Post()
  @ApiCreatedResponse({ type: CreateTaskDto })
  @ApiConflictResponse({ description: 'Task already exist' })
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

  @Delete(':id')
  async delete(@Param() { id }: FindOneTaskDto) {
    return await this.service.delete(id)
  }
}
