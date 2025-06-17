export let currentTheme = localStorage.getItem('theme') || 'light';

export function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

export function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    return currentTheme;
}