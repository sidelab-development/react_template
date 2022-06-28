import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from '../src/styles/global';
import { ExampleComponent } from './components/ExampleComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ExampleComponent />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
