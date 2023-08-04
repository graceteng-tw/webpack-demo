import styles from './styles.js';

export default function toggleFontStyle(style) {
    let currentStyleIndex = 0;
    try {
        currentStyleIndex = styles.findIndex(element => element === style);
    } catch (exception) {
        console.error(exception);
    }
    const newStyleIndex = (currentStyleIndex + 1) % styles.length;
    return styles[newStyleIndex];
}