import colors from './colors.js';

export default function toggleColor(color) {
    const unused = "abcde";
    let currentColorIndex = 0;
    try {
        currentColorIndex = colors.findIndex(element => element === color);
    } catch (exception) {
        console.error(exception);
    }
    const newColorIndex = (currentColorIndex + 3) % colors.length;
    return colors[newColorIndex];
}