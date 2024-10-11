// src/utils/theme.ts
export const toggleTheme = () => {
    const html = document.documentElement; // Get the root HTML element
    if (html.classList.contains('dark')) {
      html.classList.remove('dark'); // Remove dark class if it exists
      localStorage.setItem('theme', 'light'); // Save light theme preference
    } else {
      html.classList.add('dark'); // Add dark class if it does not exist
      localStorage.setItem('theme', 'dark'); // Save dark theme preference
    }
  };
  