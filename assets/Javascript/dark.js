const btnDark = document.querySelector('#dark')
const root = document.querySelector(':root');
const colorWhite = getComputedStyle(root).getPropertyValue('--color-white');

let count = 0

btnDark.addEventListener('click', () => {
    if (count == 0) {
        root.style.setProperty('--color-white', '#000000');
        root.style.setProperty('--color-black', '#FFFFFF');
        count ++   
    } else if(count > 0) {
        root.style.setProperty('--color-white', '#FFFFFF');
        root.style.setProperty('--color-black', '#000000');
        count--
    }
})
