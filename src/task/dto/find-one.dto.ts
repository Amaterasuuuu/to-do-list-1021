import { Length } from "class-validator";

export class FindOneTaskDto {
  @Length(24, 24)
  id: string
}
