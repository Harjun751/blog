document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('toggle');
    const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultScheme = osPrefersDark ? 'dark' : 'light';
    const savedScheme = localStorage.getItem('color-scheme');

    if (savedScheme) {
        document.documentElement.setAttribute('color-scheme', savedScheme);

        if (defaultScheme === "light") {
            themeCheckbox.checked = savedScheme === "dark";
        } else {
            themeCheckbox.checked = savedScheme === "light";
        }
    }

    themeCheckbox.addEventListener('change', (e) => {
        let newScheme;
        if (defaultScheme === "dark") {
            newScheme = e.target.checked ? "light" : "dark";
        } else {
            newScheme = e.target.checked ? "dark" : "light";
        }
        document.documentElement.setAttribute('color-scheme', newScheme);
        localStorage.setItem('color-scheme', newScheme);
    })
});
