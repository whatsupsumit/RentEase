// Theme switching removed - using only dark theme
// This file is kept for potential future theme features
export const useTheme = () => {
  return { isHighContrast: false };
};

export const ThemeProvider = ({ children }) => {
  return children;
};
