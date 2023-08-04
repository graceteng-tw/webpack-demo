const colors = ['blue', 'red', 'black', 'green', 'purple', 'gold', 'orange'];
const typefaces = ['Helvetica', 'Palatino', 'Zapfino'];
const sizes = ['2rem', '3rem', '4rem', '5rem', '6rem'];
const styles = ['normal', 'italic'];

function toggleColor(color) {
    let currentColorIndex = 0;
    try {
        currentColorIndex = colors.findIndex(element => element === color);
    } catch (exception) {
        console.error(exception);
    }
    const newColorIndex = (currentColorIndex + 1) % colors.length;
    return colors[newColorIndex];
}

function toggleFontFace(typeface) {
    let currentTypefaceIndex = 0;
    try {
        currentTypefaceIndex = typefaces.findIndex(element => element === typeface);
    } catch (exception) {
        console.error(exception);
    }
    const newTypefaceIndex = (currentTypefaceIndex + 1) % typefaces.length;
    return typefaces[newTypefaceIndex];
}

function toggleFontSize(size) {
    let currentSizeIndex = 0;
    try {
        currentSizeIndex = sizes.findIndex(element => element === size);
    } catch (exception) {
        console.error(exception);
    }
    const newSizeIndex = (currentSizeIndex + 1) % sizes.length;
    return sizes[newSizeIndex];
}

function toggleFontStyle(style) {
    let currentStyleIndex = 0;
    try {
        currentStyleIndex = styles.findIndex(element => element === style);
    } catch (exception) {
        console.error(exception);
    }
    const newStyleIndex = (currentStyleIndex + 1) % styles.length;
    return styles[newStyleIndex];
}

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