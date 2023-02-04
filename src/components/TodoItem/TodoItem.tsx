import { ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonContainer, Item, ItemButton, ItemContent, ItemTitle } from './todoItemStyle';
import { Todo } from '@/types';

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props) {
  return (
    <Item disablePadding>
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
        <ButtonContainer>
          <DeleteIcon />
          삭제
        </ButtonContainer>
      </ItemButton>
    </Item>
  );
}

export default TodoItem;
