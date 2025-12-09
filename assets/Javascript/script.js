const backgroundBtn = document.querySelector('#background')
const background = document.querySelector('.background')
const scaleBtn = document.querySelector('#scale')
const scale = document.querySelector('.scale')
const moveBtn = document.querySelector('#move')
const move = document.querySelector('.move')

backgroundBtn.addEventListener('click', () => {
    background.classList.toggle('background-red') 
})

scaleBtn.addEventListener('mouseenter', () => {
    scale.classList.add('scale-min') 
})

scaleBtn.addEventListener('mouseleave', () => {
    scale.classList.remove('scale-min') 
})

moveBtn.addEventListener('click', () => {
    move.classList.toggle('move-right') 
})