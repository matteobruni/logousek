import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = mode => {
        localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);
    return [theme, changeTheme]
};