import styled from '@emotion/styled';

export const TodoFormContainer = styled.div`
  width: 50%;
  height: 60rem;
  border: 0.03rem solid ${(props) => props.theme.colors.primary};
  border-right: 0;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const TodosContainer = styled.div`
  width: 50%;
  height: 60rem;
  border: 0.03rem solid ${(props) => props.theme.colors.primary};
  borderLeft: 0;
  borderBottomRightRadius: 0.5rem;
  borderTopRightRadius: 0.5rem;
  &:before: {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0.1rem;
    height: 55rem;
    backgroundColor: ${(props) => props.theme.colors.neutrual};
  },
`;
