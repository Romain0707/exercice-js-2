const xWing = document.querySelector('.x-wing');

let numberX = xWing.getBoundingClientRect().x;
let numberY = xWing.getBoundingClientRect().y;

window.addEventListener('keypress', (e) => {
    if(e.key === "z" && numberX > 20) {
        xWing.style.top = numberX + "px";
        numberX += -10; 
    }
});

window.addEventListener('keypress', (e) => {
    if(e.key === "s" && numberX < window.innerHeight - 70) {
        xWing.style.top = numberX + "px";
        numberX += 10;
    }
})

window.addEventListener('keypress', (e) => {
    if(e.key === "q" && numberY > 20) {
        xWing.style.left = numberY + "px";
        numberY += -10;
    }
})

window.addEventListener('keypress', (e) => {
    if(e.key === "d" && numberY < window.innerWidth - 70) {
        xWing.style.left = numberY + "px";
        numberY += 10;
    }
})