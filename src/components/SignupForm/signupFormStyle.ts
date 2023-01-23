import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

export const InputContainer = styled.div`
  height: 90px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  font-size: 18px;
  margin-top: 25px;
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
  margin-bottom: 10px;
`;
