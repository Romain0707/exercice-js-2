const xWing = document.querySelector('.x-wing');

let numberX = xWing.getBoundingClientRect().left;
let numberY = xWing.getBoundingClientRect().top;

xWing.style.left = numberX + "px";
xWing.style.top = numberY + "px";

const lasers = [];

window.addEventListener('keypress', (e) => {
    if(e.key === "z" && numberY > 20) {
        numberY -= 10; 
        xWing.style.top = numberY + "px";
    }
    if(e.key === "s" && numberY < window.innerHeight - 70) {
        numberY += 10;
        xWing.style.top = numberY + "px";
    }
    if(e.key === "q" && numberX > 20) {
        numberX -= 10;
        xWing.style.left = numberX + "px";
        xWing.classList.add('xwing-left')
    }
    if(e.key === "d" && numberX < window.innerWidth - 70) {
        numberX += 10;
        xWing.style.left = numberX + "px";
        xWing.classList.add('xwing-right')
    }
});

window.addEventListener('keyup', (e) => {
    if(e.key === "q" && numberX > 20) {
        xWing.classList.remove('xwing-left')
    }
    if(e.key === "d" && numberX < window.innerWidth - 70) {
        xWing.classList.remove('xwing-right')
    }
});


window.addEventListener('keypress', (e) => {
    if(e.key === " ") {
        shootLaser();
    }
})

function shootLaser() {
    const laser = document.createElement('div');
    laser.className = 'laser';
    laser.style.position = 'absolute';
    laser.style.width = '4px';
    laser.style.height = '15px';
    laser.style.backgroundColor = 'red';
    laser.style.left = (numberX + 23) + 'px'; 
    laser.style.top = numberY + 'px';
    laser.style.boxShadow = '0 0 10px red';
    
    document.body.appendChild(laser);
    
    const laserData = {
        element: laser,
        y: numberY
    };
    
    lasers.push(laserData);
}

setInterval(() => {
    for(let i = lasers.length - 1; i >= 0; i--) {
        const laserData = lasers[i];
        
        laserData.y -= 5;
        laserData.element.style.top = laserData.y + 'px';
        
        if(laserData.y < -20) {
            laserData.element.remove();
            lasers.splice(i, 1);
        }
    }
}, 16);