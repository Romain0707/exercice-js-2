const xWing = document.querySelector('.x-wing');

let numberX = xWing.getBoundingClientRect().left;
let numberY = xWing.getBoundingClientRect().top;

xWing.style.left = numberX + "px";
xWing.style.top = numberY + "px";

window.addEventListener('keypress', (e) => {
    if(e.key === "z" && numberY > 20) {
        numberY -= 10; 
        xWing.style.top = numberY + "px";
    }
});

window.addEventListener('keypress', (e) => {
    if(e.key === "s" && numberY < window.innerHeight - 70) {
        numberY += 10;
        xWing.style.top = numberY + "px";
    }
});

window.addEventListener('keypress', (e) => {
    if(e.key === "q" && numberX > 20) {
        numberX -= 10;
        xWing.style.left = numberX + "px";
    }
});

window.addEventListener('keypress', (e) => {
    if(e.key === "d" && numberX < window.innerWidth - 70) {
        numberX += 10;
        xWing.style.left = numberX + "px";
    }
});