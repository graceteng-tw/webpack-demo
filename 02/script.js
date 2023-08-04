window.addEventListener("DOMContentLoaded", ()=>{
    function toggleColor(color) {
        return color === 'blue' ? 'red' : 'blue';
    }
    const header = document.getElementById('header');
    header.style.color = 'blue';
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        header.style.color = toggleColor(header.style.color);
    });
});