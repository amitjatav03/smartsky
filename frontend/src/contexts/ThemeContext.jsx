import { createContext, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const themes = {
        theme,
        setTheme,
        toggleTheme
    }

    return (
        <ThemeDataContext.Provider value={themes}>
            {children}
        </ThemeDataContext.Provider>
    )
}

export default ThemeContext;