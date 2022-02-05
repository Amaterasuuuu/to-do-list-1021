import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class CreateTaskDto {
  @ApiProperty({
    description: 'Title of task', example: 'Buy bread'
  })
  title: string

  @ApiPropertyOptional({
    description: 'Description of task', example: ''
  })
  description?: string

  @ApiProperty({
    description: '2022-02-05T18:00:00', example: '2022-02-05T18:00:00'
  })
  date: string
}
