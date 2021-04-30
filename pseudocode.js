
// Make blocks clickable. Need to remove the clicking in the gap and have it set to only the div if possible  
const gridBlock1 = document.querySelector('.gb1')
const gridBlock2 = document.querySelector('.gb2')
const sequence = []


gridBlock1.addEventListener('click', (event) => {
    event.target.style.background = 'white'
    setTimeout(revertBackground, 120)
})

gridBlock2.addEventListener('click', (event) => {
    event.target.style.background = 'white'
    setTimeout(revertBackground, 120)
})

// function to revert style back after click 
function revertBackground(event) {
    gridBlock1.style.background = '#ff9980'
    gridBlock2.style.background = '#ff9980'
}

//generate random sequence
//assign each block either 0 or 1, generate random 0 or 1, 

const sequenceButton = document.querySelector('#new-game')

sequenceButton.addEventListener('click', (event) => {
    // console.log(event.target)
    for (let i = 2; i < 3; i++) {
        let num = Math.floor(Math.random() * 2)
        sequence.push(num)
        // console.log(num)

    }

    console.log(sequence)
})

//each click adds one random '0' or '1' to the array, increasing the array by one with each click.
//
