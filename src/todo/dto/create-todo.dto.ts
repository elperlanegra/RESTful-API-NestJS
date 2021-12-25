// todo/dto/create-todo.dto.ts
import { BaseTodoDto } from "./base-todo.dto";

export class CreateTodoDto extends BaseTodoDto {}

// todo/dto/update-todo.dto.ts
import { BaseTodoDto } from './base-todo.dto';

export class UpdateTodoDto extends BaseTodoDto {
  completedAt: Date;
}