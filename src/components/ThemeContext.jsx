import { createContext } from 'react';
export const ThemeContext = createContext({             // safe default
  theme: 'dark',
  setTheme: () => {},    // no-op fallback so destructuring never fails
});
