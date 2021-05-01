
// Make blocks clickable. 
const gridBlock1 = document.querySelector('.gb1')
const gridBlock2 = document.querySelector('.gb2')
const gridBlocks = document.querySelectorAll('.grid-block')
const sequence = []
const userSequence = []


// gridBlock1.addEventListener('click', (event) => {
//     event.target.style.background = 'white'
//     setTimeout(revertBackground, 120)
// })

// gridBlock2.addEventListener('click', (event) => {
//     event.target.style.background = 'white'
//     setTimeout(revertBackground, 120)
// })

// function to revert style back after click 
// function revertBackground() {
//     gridBlock1.style.background = '#92d6c3'
//     gridBlock2.style.background = '#92d6c3'
// }

function revertBackground() {
    gridBlocks.forEach(gridBlock => {
        gridBlock.style.background = '#92d6c3'
    })
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


// generateButton.addEventListener('click', (event) => {
//     for (let i = 2; i < 3; i++) {
//         let num = Math.floor(Math.random() * 2)
//         if (num === 0) {
//             sequence.push(gridBlock1)
//         } else {
//             sequence.push(gridBlock2)
//         }
//         console.log(sequence)
//     }
//     initiateSequence()
//     clearUserSequence()
// })


//generates random sequence but also limits when a sequence can generate
generateButton.addEventListener('click', (event) => {
    if (sequence.length === 0) {
        generateSequence()
    } else if (sequence.length !== 0) {
        if (generateFlag.length === sequence.length) {
            generateSequence()
        } else {
            console.log('user plays first')
        }
    }
})

// generateButton.addEventListener('click', generateSequence)

function generateSequence() {
    for (let i = 2; i < 3; i++) {
        let num = Math.floor(Math.random() * 2)
        if (num === 0) {
            sequence.push(gridBlock1)
        } else {
            sequence.push(gridBlock2)
        }
        console.log(sequence)
    }
    initiateSequence()
    clearUserSequence()
}




//each click adds one random '0' or '1' to the array, increasing the array by one
//assign each a styling to hide or show the block
//assign each block a set timeout to run on click 



// button triggers the sequence 
sequenceButton.addEventListener('click', initiateSequence)


//trigger the computer generated sequence 
let time = 300
let newTime = 0

function initiateSequence() {
    for (let i = 0; i < sequence.length; i++) {
        let newTime = i * 1000
        x = setTimeout(function () { delay(i) }, newTime)
    }
}



//make the blocks flash 
function delay(i) {
    sequence[i].style.background = 'beige'
    setTimeout(revertBackground, time)
}


// Make blocks clickable. Need to remove the clicking in the gap and have it set to only the div if possible 

// gridBlocks.forEach(gridBlock => {
//     gridBlock.addEventListener('click', (event) => {
//         let block = event.target
//         userDelay(block)
//     })
// });

// gridBlock1.addEventListener('click', (event) => {
//     let block = event.target
//     userDelay(block)
// })

// gridBlock2.addEventListener('click', (event) => {
//     let block = event.target
//     userDelay(block)
// })

//make blocks flash on user clicks
function userDelay(block) {
    block.style.background = 'beige'
    setTimeout(revertBackground, time)
}

//Store the user initiated sequence 
// on end of initiate sequence, window needs to open for a user to input their sequence which can be stored in an array.  
// 
// gridBlock1.addEventListener('click', (event) => {
//     let block = event.target
//     userDelay(block)
//     userSequence.push(event.target)
//     console.log(userSequence)
// })

// gridBlock2.addEventListener('click', (event) => {
//     let block = event.target
//     userDelay(block)
//     userSequence.push(event.target)
//     console.log(userSequence)
// })

gridBlocks.forEach(gridBlock => {
    gridBlock.addEventListener('click', (event) => {
        let block = event.target
        userDelay(block)
        userSequence.push(event.target)
        console.log(userSequence)
    })
});

//clear the user sequence
function clearUserSequence() {
    for (let i = 0; i = userSequence.length; i++) {
        userSequence.shift()
    }
    console.log(userSequence)
}

const clearSequenceButton = document.querySelector('#clear-sequence')
clearSequenceButton.addEventListener('click', clearUserSequence)

//compare the sequences 
const comparisonSequence = []
const generateFlag = []

// function compareSequences() {
//     for (let i = 0; i < sequence.length; i++) {
//         if (sequence[i] === userSequence[i]) {
//             // console.log('game over')
//             comparisonSequence.push(sequence[i])
//         }
//     }
//     if (comparisonSequence.length === sequence.length) {
//         console.log('advance')
//     } else {
//         console.log('game over')
//     }
//     console.log(comparisonSequence)
//     setTimeout(clearComparisonSequence, 200)
// }

// function compareSequences() {
//     for (let i = 0; i < sequence.length; i++) {
//         if (sequence[i] === userSequence[i]) {
//             comparisonSequence.push(sequence[i])
//         }
//     }
//     if (comparisonSequence.length === sequence.length) {
//         console.log('advance')
//     } else {
//         console.log('game over')
//     }
//     console.log(comparisonSequence)
//     setTimeout(clearComparisonSequence, 200)
//     generateFlag.push('generate')
//     console.log(generateFlag)
// }

function compareSequences() {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === userSequence[i]) {
            comparisonSequence.push(sequence[i])
        }
    }
    if (comparisonSequence.length === sequence.length) {
        console.log('advance')
    } else {
        console.log('game over')
        clearSequence()
    }
    console.log(comparisonSequence)
    setTimeout(clearComparisonSequence, 200)
    generateFlag.push('generate')
    console.log(generateFlag)
}


//clear comparisonSequence
function clearComparisonSequence() {
    for (let i = 0; i = comparisonSequence.length; i++) {
        comparisonSequence.shift()
    }
    console.log(comparisonSequence)
}


const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', compareSequences)

//new game button clears sequence array 
const newGameButton = document.querySelector('#new-game')

function clearSequence() {
    for (let i = 0; i = sequence.length; i++) {
        sequence.shift()
    }
    console.log(sequence)
    clearGenerateFlag()
}

newGameButton.addEventListener('click', clearSequence)

// set limit on clicking generate unless user sequence has started
// submit button pushes flag into array - done
//generate needs to clear submit array or use array .length for check
//if sequence is [] = generate can run
// if (sequence.length === 0) {
//     generateSequence()
// } else if (sequence.length !== 0) {
//     if (generateFlag.length === sequence.length) {
//         generateSequence()
//     } else {
//         console.log('user plays first')
//     }
// }
//if sequence ![] then check if submit array is [].
//if submit array is empty, don't run generate.
//if submit is populated, run generate and clear submitarray. 

//game over needs to clear the submit sequence. Add to clearSequence()

function clearGenerateFlag() {
    for (let i = 0; i = generateFlag.length; i++) {
        generateFlag.shift()
    }
    console.log(generateFlag)
}

//need to limit user from advancing on correct sequence plus extra