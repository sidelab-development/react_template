import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import GlobalStyles from '../src/styles/global';
import { MainRoutes } from './pages/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRoutes />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// React modal
// Video
