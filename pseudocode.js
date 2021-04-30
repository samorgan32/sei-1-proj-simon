
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
    gridBlock1.style.background = '#92d6c3'
    gridBlock2.style.background = '#92d6c3'
}

//generate random sequence
//assign each block either 0 or 1, generate random 0 or 1, 

const sequenceButton = document.querySelector('#initiate')
const generateButton = document.querySelector('#generate')


// sequenceButton.addEventListener('click', (event) => {
//     for (let i = 2; i < 3; i++) {
//         let num = Math.floor(Math.random() * 2)
//         sequence.push(num)
//     }
//     console.log(sequence)
// })


generateButton.addEventListener('click', (event) => {
    for (let i = 2; i < 3; i++) {
        let num = Math.floor(Math.random() * 2)
        if (num === 0) {
            sequence.push(gridBlock1)
        } else {
            sequence.push(gridBlock2)
        }
        console.log(sequence)
    }

})

//each click adds one random '0' or '1' to the array, increasing the array by one
//assign each a styling to hide or show the block
//assign each block a set timeout to run on click 

// sequenceButton.addEventListener('click', (event) => {
//     for (let i = 0; i < sequence.length; i++) {
//         sequence[i].style.background = 'white'
//         setTimeout(revertBackground, 120)
//     }
// })

sequenceButton.addEventListener('click', initiateSequence)

function initiateSequence() {
    sequence.forEach(function (e) {
        e.style.background = 'white'
        setTimeout(revertBackground, 120)
    })
}

// function initiateSequence() {
//     for (let i = 0; i < sequence.length; i++) {
//         sequence[i].style.background = 'white'
//         setTimeout(revertBackground, 120)
//     }

// }


