import { useState, useEffect } from 'react';

const useTheme = () => {
  // Check if a theme is already set in localStorage
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || 'light');

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    console.log('theme', theme)
  };

  // Add theme class to body element
  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
