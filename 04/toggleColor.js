import colors from './colors.js';

export default function toggleColor(color) {
    let currentColorIndex = 0;
    try {
        currentColorIndex = colors.findIndex(element => element === color);
    } catch (exception) {
        console.error(exception);
    }
    const newColorIndex = (currentColorIndex + 1) % colors.length;
    return colors[newColorIndex];
}