import { useState, useEffect } from "react";
import {
  getTheme,
  setTheme,
  toggleTheme,
  initializeTheme,
  type Theme,
} from "./theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeTheme();
    const currentTheme = getTheme();
    setThemeState(currentTheme);
    setIsInitialized(true);
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  const switchTheme = () => {
    const newTheme = toggleTheme();
    setThemeState(newTheme);
    return newTheme;
  };

  return {
    theme,
    isInitialized,
    setTheme: changeTheme,
    toggleTheme: switchTheme,
  };
}
