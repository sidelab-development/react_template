import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from '../src/styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
