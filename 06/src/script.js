import toggleColor from './toggleColor.js';
import toggleFontFace from './toggleFontFace.js';
import toggleFontSize from './toggleFontSize.js';
import toggleFontStyle from './toggleFontStyle.js';

window.addEventListener("DOMContentLoaded", ()=>{
    const header = document.getElementById('header');
    header.style.color = 'blue';
    header.style.fontFamily = 'Helvetica';
    header.style.fontSize = '2rem';
    header.style.fontStyle = 'normal';
    const button = document.getElementById('button');
    buttonChangeFontColor.addEventListener('click', () => {
        header.style.color = toggleColor(header.style.color);
    });
    buttonChangeFontFace.addEventListener('click', () => {
        header.style.fontFamily = toggleFontFace(header.style.fontFamily);
    });
    buttonChangeFontSize.addEventListener('click', () => {
        header.style.fontSize = toggleFontSize(header.style.fontSize);
    });
    buttonChangeFontStyle.addEventListener('click', () => {
        header.style.fontStyle = toggleFontStyle(header.style.fontStyle);
    });
});