const xWing = document.querySelector('.x-wing');

let numberX = 150;
let numberY = 150;

window.addEventListener('keydown', (e) => {
    if(e.key === "z") {
        xWing.style.top = numberX + "px";
        numberX += -10;
    }
    if(e.key === "s") {
        xWing.style.top = numberX + "px";
        numberX += 10;
    }
    if(e.key === "q") {
        xWing.style.left = numberY + "px";
        numberY += -10;
    }
    if(e.key === "d") {
        xWing.style.left = numberY + "px";
        numberY += 10;
    }
});