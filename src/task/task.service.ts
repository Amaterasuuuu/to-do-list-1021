import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto';
import { TaskEntity } from './entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskEntity.name)
    private readonly entity: Model<TaskEntity>
  ) {}

  async findAll() {
    return await this.entity.find()
  }

  async create(dto: CreateTaskDto) {
    return await this.entity.create(dto)
  }
}
