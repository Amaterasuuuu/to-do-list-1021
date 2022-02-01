import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskEntity, TaskSchema } from './entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TaskEntity.name, schema: TaskSchema },
    ])
  ],
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {}
