import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 36rem;
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    background-color: gray;
    border-radius: ${theme.borderRadius[1]};
    border: none;
    color: ${theme.colors.white};

    &:focus {
      outline: none
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 36rem;
    padding: 1.5rem 1.5rem;
    font-size: 1.8rem;
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: ${theme.borderRadius[1]};
    color: ${theme.colors.white};
    margin-bottom: 1rem;
  `}
`;
