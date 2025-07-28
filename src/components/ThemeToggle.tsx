import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 bg-muted rounded-full transition-all duration-300 hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
    >
      {/* Toggle Background */}
      <div 
        className={`
          absolute inset-0 rounded-full transition-all duration-300
          ${isDark ? 'bg-primary' : 'bg-secondary'}
        `}
      />
      
      {/* Toggle Circle */}
      <div 
        className={`
          relative w-5 h-5 bg-background rounded-full shadow-md transition-all duration-300 transform flex items-center justify-center
          ${isDark ? 'translate-x-3' : '-translate-x-3'}
        `}
      >
        {/* Icons */}
        <Sun 
          size={12} 
          className={`
            absolute transition-all duration-300 text-yellow-500
            ${isDark ? 'opacity-0 scale-0 rotate-180' : 'opacity-100 scale-100 rotate-0'}
          `} 
        />
        <Moon 
          size={12} 
          className={`
            absolute transition-all duration-300 text-blue-400
            ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'}
          `} 
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
        {isDark ? 'Modo claro' : 'Modo escuro'}
      </div>
    </button>
  );
};

export default ThemeToggle;