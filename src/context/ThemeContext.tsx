import { createContext, useContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const root = document.documentElement;
        if(theme === 'dark'){
            root.classList.add(theme)
        }else{
            root.classList.remove('dark')
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};