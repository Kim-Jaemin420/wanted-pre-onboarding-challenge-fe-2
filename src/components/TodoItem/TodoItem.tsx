import { useNavigate } from 'react-router';
import { ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteTodo } from '@/hooks';
import { TodoResponse } from '@/types';
import { PAGE_ROUTE } from '@/consts';
import { ButtonContainer, Item, ItemButton, ItemContent, ItemTitle } from './todoItemStyle';

interface Props {
  todo: TodoResponse;
}

function TodoItem({ todo }: Props) {
  const navigate = useNavigate();

  const deleteTodo = useDeleteTodo();

  const handleClickTodoItem = (event: React.MouseEvent<HTMLLIElement>) => {
    navigate(`${PAGE_ROUTE.TODOS}/${todo.id}`);
  };

  const handleClickDeleteButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const { id } = todo;

    deleteTodo.mutate(id);
  };

  return (
    <Item disablePadding onClick={handleClickTodoItem}>
      <ItemButton>
        <ListItemText
          disableTypography
          primary={<ItemTitle>{todo.title}</ItemTitle>}
          secondary={<ItemContent>{todo.content}</ItemContent>}
        />
        <ButtonContainer>
          <EditIcon />
          수정
        </ButtonContainer>
        <ButtonContainer name="deleteButton" onClick={handleClickDeleteButton}>
          <DeleteIcon />
          삭제
        </ButtonContainer>
      </ItemButton>
    </Item>
  );
}

export default TodoItem;
