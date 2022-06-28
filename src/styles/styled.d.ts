import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  type NewThemeType = typeof theme;

  export interface DefaultTheme extends NewThemeType {}
}
