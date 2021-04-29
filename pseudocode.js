
// Make blocks clickable. Need to remove the clicking in the gap and have it set to only the div if possible  
const gridBlock1 = document.querySelector('.gb1')
const gridBlock2 = document.querySelector('.gb2')


gridBlock1.addEventListener('click', (event) => {
    // console.log(event.target)
    event.target.style.background = '#ff9980'
    setTimeout(revertBackground, 120)
})

gridBlock2.addEventListener('click', (event) => {
    // console.log(event.target)
    event.target.style.background = '#ff9980'
    setTimeout(revertBackground, 120)
})

// function to revert style back after click 
function revertBackground(event) {
    gridBlock1.style.background = 'white'
    gridBlock2.style.background = 'white'
}