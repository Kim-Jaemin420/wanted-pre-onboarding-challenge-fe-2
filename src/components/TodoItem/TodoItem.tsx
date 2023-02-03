import { ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonContainer, Item, ItemButton, ItemContent, ItemTitle } from './todoItemStyle';

function TodoItem() {
  return (
    <Item disablePadding>
      <ItemButton>
        <ListItemText
          disableTypography
          primary={<ItemTitle>자바스크립트 공부하기</ItemTitle>}
          secondary={<ItemContent>브라우저 렌더링 과정 알아보기</ItemContent>}
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
