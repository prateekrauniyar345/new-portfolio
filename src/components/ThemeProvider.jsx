import { useState, useMemo, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

/*
 * ThemeProvider component manages the theme state ('dark' or 'light')
 * and provides it to all child components via React Context.
 */

export default function ThemeProvider({ children }) {
  // useState hook initializes the theme state with 'dark'.
  // Example: If you want the default theme to be 'light', replace 'dark' with 'light'.
  const [theme, setTheme] = useState('dark');

  /*
   * toggleTheme function switches the theme between 'light' and 'dark'.
   * Example: If the current theme is 'light', it changes to 'dark', and vice versa.
   */
  const toggleTheme = () =>
    setTheme(t => (t === 'light' ? 'dark' : 'light'));

  /*
   * useMemo hook memoizes the context object to prevent unnecessary re-renders.
   * React will only recompute this value when the 'theme' changes.
   * Example: If the theme changes from 'dark' to 'light', React will recompute ctx.
   */
  const ctx = useMemo(() => ({ theme, toggleTheme }), [theme]);

  /*
   * useEffect hook updates the <body> class whenever the theme changes.
   * This ensures the correct theme styles are applied globally.
   * Example: If the theme changes to 'light', it removes 'dark' and adds 'light' to <body>.
   */
  useEffect(() => {
    document.body.classList.remove('light', 'dark'); // Remove both theme classes
    document.body.classList.add(theme); // Add the current theme class
  }, [theme]);

  /*
   * ThemeContext.Provider makes the context object available to all child components.
   * Example: Any component inside <ThemeProvider> can access 'theme' and 'toggleTheme'.
   * Usage:
   * const { theme, toggleTheme } = useContext(ThemeContext);
   */
  return (
    <ThemeContext.Provider value={ctx}>
      {children} {/* Render all child components passed to ThemeProvider */}
    </ThemeContext.Provider>
  );
}
