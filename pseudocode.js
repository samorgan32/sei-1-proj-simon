
// Make blocks clickable. 
// const gridBlock1 = document.querySelector('.gb1')
// const gridBlock2 = document.querySelector('.gb2')
// const gridBlock3 = document.querySelector('.gb3')
// const gridBlock4 = document.querySelector('.gb4')
const gridBlocks = document.querySelectorAll('.grid-block')
// const gridBlocks = document.getElementsByClassName('.grid-block')
const gridBlocksArray = Array.from(gridBlocks)
const sequence = []
const userSequence = []


//make the blocks flash 

function delay(i) {
    sequence[i].style.visibility = 'hidden'
    setTimeout(revertBackground, time)
}




// Make blocks clickable. 
//make blocks flash on user clicks


// function userDelay(block) {
//     block.style.visibility = 'hidden'
//     setTimeout(revertBackground, time)
// }


// function revertBackground() {
//     gridBlocksArray.forEach(gridBlock => {
//         gridBlock.style.visibility = 'visible'
//     })
// }


//generate random sequence
//assign each block either 0 or 1, generate random 0 or 1, 

// const sequenceButton = document.querySelector('#initiate')
// const generateButton = document.querySelector('#generate')


//generates random sequence but also limits when a sequence can generate

// generateButton.addEventListener('click', delayedSequenceStart)

function finalSequenceStart() {
    if (sequence.length === 0) {
        generateSequence()
    } else if (sequence.length !== 0) {
        if (generateFlag.length === sequence.length) {
            generateSequence()
        } else {
            console.log('user plays first')
        }
    }
}
//delays start of sequence so user sees it 
function delayedSequenceStart() {
    setTimeout(finalSequenceStart, 4000)
}
// generateButton.addEventListener('click', generateSequence)

//generates the auto sequence

function generateSequence() {
    let num = Math.floor(Math.random() * gridBlocksArray.length)
    sequence.push(gridBlocksArray[num])
    console.log(sequence)
    initiateSequence()
    clearUserSequence()
}




//each click adds one random '0' or '1' to the array, increasing the array by one
//assign each a styling to hide or show the block
//assign each block a set timeout to run on click 



// button triggers the sequence 
// sequenceButton.addEventListener('click', initiateSequence)


//trigger the computer generated sequence 
let time = 150
let newTime = 0

function initiateSequence() {
    for (let i = 0; i < sequence.length; i++) {
        let newTime = i * 700
        x = setTimeout(function () { delay(i) }, newTime)
    }
}




//Store the user initiated sequence 
//   
function userSequenceInitiate() {
    gridBlocksArray.forEach(gridBlock => {
        gridBlock.addEventListener('click', (event) => {
            let block = event.target
            userDelay(block)
            userSequence.push(event.target)
            console.log(userSequence)
        })
    })
};


function userSequenceRemove() {
    gridBlocksArray.forEach(gridBlock => {
        gridBlock.removeEventListener('click', userSequenceInitiate)
    })
}


function userDelay(block) {
    block.style.visibility = 'hidden'
    setTimeout(revertBackground, time)
}



function revertBackground() {
    gridBlocksArray.forEach(gridBlock => {
        gridBlock.style.visibility = 'visible'
    })
}


//clear the user sequence
function clearUserSequence() {
    for (let i = 0; i = userSequence.length; i++) {
        userSequence.shift()
    }
    console.log(userSequence)
}





// const clearSequenceButton = document.querySelector('#clear-sequence')
// clearSequenceButton.addEventListener('click', clearUserSequence)

//compare the sequences
// run generate if correct, clear if incorrect 
const comparisonSequence = []
const generateFlag = []
const resultMessage = document.querySelector('#result')
const memories = document.querySelector('#memories')

function compareSequences() {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === userSequence[i]) {
            comparisonSequence.push(sequence[i])
        }
    }
    if (comparisonSequence.length === sequence.length && sequence.length === userSequence.length) {
        resultMessage.innerText = 'result: advance'
        score.innerText = 'score: ' + sequence.length
        generateFlag.push('generate')
        console.log(generateFlag)
        delayedSequenceStart()
    } else {
        resultMessage.innerText = 'result: game over'
        // setTimeout(clearSequence, 1000)
    }
    console.log(comparisonSequence)
    setTimeout(clearComparisonSequence, 200)
    if (sequence.length === 1) {
        setTimeout(addBlocks, 500)
        setTimeout(addBlocks, 1000)
        setTimeout(addBlocks, 1500)
    } else if (sequence.length % 4 === 0 && sequence.length < 37) {
        setTimeout(addBlocks, 500)
        setTimeout(addBlocks, 1000)
        setTimeout(addBlocks, 1500)
        setTimeout(addBlocks, 2000)

    }

}



//clear comparisonSequence
function clearComparisonSequence() {
    for (let i = 0; i = comparisonSequence.length; i++) {
        comparisonSequence.shift()
    }
    console.log(comparisonSequence)
}
// ///////////////////////////Debug/////////////////////

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
    score.innerText = 'score:'
    resultMessage.innerText = 'result:'
    clearGridBlocksArray()
    removeBlocks()

    delayedSequenceStart()
}
/////////////////////////////////////////////////////////
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

//add blocks to the grid.  need to change nodelist to array so they can be used in sequences 

const gridDiv = document.querySelector('.grid')
const addBlockButton = document.querySelector('#add-block')
let blockIndex = 0


userSequenceInitiate()


function addBlocks() {
    const newBlock = document.createElement('div')
    gridDiv.appendChild(newBlock)
    newBlock.classList.add('grid-block')
    blockIndex++
    newBlock.classList.add(`gb${blockIndex}`)
    gridBlocksArray.push(newBlock)
    newBlock.addEventListener('click', (event) => {
        let block = event.target
        userDelay(block)
        userSequence.push(event.target)
        console.log(userSequence)

    })
    // });
    console.log(gridBlocksArray)
}



addBlockButton.addEventListener('click', (event) => {
    addBlocks()
    // addBlocks()
})

//remove blocks on new game
function removeBlocks() {
    for (let i = 1; i < gridBlocksArray.length; i++) {
        gridDiv.removeChild(gridDiv.lastChild)
    }
}



const removeButton = document.querySelector('#remove')

removeButton.addEventListener('click', removeBlocks)

//clear gridblocksarry on new game
function clearGridBlocksArray() {
    for (let i = 1; i < gridBlocksArray.length; i++) {
        gridBlocksArray.pop(gridBlocksArray[i])
    }
}

