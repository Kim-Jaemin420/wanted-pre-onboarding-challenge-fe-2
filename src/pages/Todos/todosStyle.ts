import styled from '@emotion/styled';

export const TodoFormContainer = styled.div((props) => ({
  width: '50%',
  height: '60rem',
  border: `0.03rem solid ${props.theme.colors.primary}`,
  borderRight: 0,
  borderBottomLeftRadius: '0.5rem',
  borderTopLeftRadius: '0.5rem',
}));

export const TodosContainer = styled.div((props) => ({
  'width': '50%',
  'height': '60rem',
  'border': `0.03rem solid ${props.theme.colors.primary}`,
  'borderLeft': 0,
  'borderBottomRightRadius': '0.5rem',
  'borderTopRightRadius': '0.5rem',
  '&:before': {
    content: "''",
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '0.1rem',
    height: '55rem',
    backgroundColor: `${props.theme.colors.neutrual}`,
  },
}));
