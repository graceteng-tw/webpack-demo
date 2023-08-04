import toggleColor from './toggleColor.js';

window.addEventListener("DOMContentLoaded", ()=>{
    const header = document.getElementById('header');
    header.style.color = 'blue';
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        header.style.color = toggleColor(header.style.color);
    });
});