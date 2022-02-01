import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin123@cluster0.4m0fy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
