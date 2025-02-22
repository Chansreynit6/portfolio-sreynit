

import '../styles/globals.css'; // Import global styles
import { useEffect } from 'react';
import { AppProps } from 'next/app'; // Import AppProps for type safety

// Custom App Component
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Retrieve the saved theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    // Toggle the 'dark' class on the document's root element based on saved theme
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  return <Component {...pageProps} />; // Render the current page
}
