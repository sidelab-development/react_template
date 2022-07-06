import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 9.6rem);

  img {
    height: 45rem;
    margin-bottom: 4rem;
  };

  h2 {
    font-size: 2rem;
  };

  a {
    font-size: 2rem;
    text-decoration: none;
  };
`;
