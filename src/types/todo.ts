export interface CreateTodoRequest {
  title: string;
  content: string;
}

export interface TodoResponse {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
