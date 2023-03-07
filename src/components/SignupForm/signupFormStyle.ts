import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

export const InputContainer = styled.div`
  height: 8rem;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  font-size: 18px;
`;

export const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: red;
  margin-bottom: 1rem;
`;
