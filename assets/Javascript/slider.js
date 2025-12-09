const titre = document.querySelector('#titre');
const input = document.querySelectorAll('input');

input[0].addEventListener("change", () => {
    let r = input[0].value;
    let g = input[1].value;
    let b = input[2].value;
    titre.style.background = `rgb(${r}, ${g}, ${b})`;
})
input[1].addEventListener("change", () => {
    let r = input[0].value;
    let g = input[1].value;
    let b = input[2].value;
    titre.style.background = `rgb(${r}, ${g}, ${b})`;
})
input[2].addEventListener("change", () => {
    let r = input[0].value;
    let g = input[1].value;
    let b = input[2].value;
    titre.style.background = `rgb(${r}, ${g}, ${b})`;
})

input[3].addEventListener("change", () => {
    let padding = input[3].value;
    titre.style.padding = `${padding}px`;
})

input[4].addEventListener("change", () => {
    let height = input[4].value;
    titre.style.height = `${height}px`;
})
input[5].addEventListener("change", () => {
    let width = input[5].value;
    titre.style.width = `${width}px`;
})
input[6].addEventListener("change", () => {
    let arrondi = input[6].value;
    titre.style.borderRadius = `${arrondi}px`;
})
input[7].addEventListener("change", () => {
    let rotation = input[7].value;
    titre.style.transform = `rotate(${rotation}deg)`;
})