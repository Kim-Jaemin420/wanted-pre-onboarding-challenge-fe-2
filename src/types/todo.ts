export interface TodoRequest {
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
