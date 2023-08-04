import typefaces from './typefaces.js';

export default function toggleFontFace(typeface) {
    let currentTypefaceIndex = 0;
    try {
        currentTypefaceIndex = typefaces.findIndex(element => element === typeface);
    } catch (exception) {
        console.error(exception);
    }
    const newTypefaceIndex = (currentTypefaceIndex + 1) % typefaces.length;
    return typefaces[newTypefaceIndex];
}