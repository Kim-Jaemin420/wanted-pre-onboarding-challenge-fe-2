export const TODO_KEYS = {
  all: ['todos'] as const,
  lists: () => [...TODO_KEYS.all, 'list'] as const,
  list: (id: string) => [...TODO_KEYS.lists(), id] as const,
};
