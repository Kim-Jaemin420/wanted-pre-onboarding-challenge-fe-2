import styled from '@emotion/styled';
import { Button, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

export const Item = styled(ListItem)`
  border-bottom: 0.001rem solid ${(props) => props.theme.colors.neutrual};
`;

export const ItemButton = styled(ListItemButton)`
  height: 10rem;
`;

export const ItemTitle = styled(Typography)`
  font-size: 1.6rem;
  width: 30rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ItemContent = styled(Typography)`
  display: -webkit-box;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.neutrual2};
  width: 35rem;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: wrap;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const ButtonContainer = styled(Button)`
  font-size: 1.5rem;
`;
