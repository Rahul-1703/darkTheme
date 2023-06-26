import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useDarkTheme = (isDarkMode) => {
  const theme = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    if (darkMode) {
      theme.dispatch({ type: "dark" });
    } else {
      theme.dispatch({ type: "light" });
    }
  }, [darkMode, theme]);
  return [darkMode, setDarkMode];
};
