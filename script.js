// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    // Apply the initial theme based on local storage
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Sun icon for light mode
    } else {
        toggleButton.textContent = '🌙'; // Moon icon for dark mode
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Update button text and local storage based on the current mode
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
            localStorage.setItem('dark-mode', 'true');
        } else {
            toggleButton.textContent = '🌙';
            localStorage.setItem('dark-mode', 'false');
        }
    });
});
