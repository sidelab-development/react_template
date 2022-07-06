import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
