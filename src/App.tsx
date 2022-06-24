import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from '../src/styles/global';

const Title = styled.h1`
  font-size: 3rem;
  color: red;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title>Hello world</Title>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
