import sizes from './sizes.js';

export default function toggleFontSize(size) {
    let currentSizeIndex = 0;
    try {
        currentSizeIndex = sizes.findIndex(element => element === size);
    } catch (exception) {
        console.error(exception);
    }
    const newSizeIndex = (currentSizeIndex + 1) % sizes.length;
    return sizes[newSizeIndex];
}