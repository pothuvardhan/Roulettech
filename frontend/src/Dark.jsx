import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  
  const { colorTheme } = useSelector((state) => state?.data);
  const [color, setColor] = useState(
    isDarkMode ? colorTheme.dark : colorTheme.light
  );

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    setColor(savedDarkMode ? colorTheme.dark : colorTheme.light);
  }, []);


  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    setColor(newDarkMode ? colorTheme.dark : colorTheme.light);
  };

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, toggleDarkMode, color, colorTheme }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
