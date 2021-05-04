
/////Variables//////

/// Blocks 
const gridBlocks = document.querySelectorAll('.grid-block')
const gridBlocksArray = Array.from(gridBlocks)
const sequence = []
const userSequence = []

///Instructions
const gameInstructions = document.querySelector('#instructions')
const instructionsArray = ['Watch the block...', 'Now click the block, then click submit...', 'Very cool, now do that a bunch more times...']

///Time for delayed calls to sequence generation
let time = 150
let newTime = 0

///Arrays for evaluating the sequences 
const comparisonSequence = []
const generateFlag = []

///confimation messages and score in html
const resultMessage = document.querySelector('#result')
const score = document.querySelector('#score')

///buttons
const submitButton = document.querySelector('#submit')
const newGameButton = document.querySelector('#new-game')


///parent div, button, and index for adding blocks 
const gridDiv = document.querySelector('.grid')
const addBlockButton = document.querySelector('#add-block')
let blockIndex = 0


///////Functions//////// 

//Instructions: used in delayedSequenceStart()

function instructions2() {
    gameInstructions.innerText = instructionsArray[1]
}

function instructions3() {
    gameInstructions.innerText = instructionsArray[2]
}

//instructions change once user has submitted and the first additional blocks have appeared in order to create a delay between blocks appearing and first block flash
function instructions() {
    for (let i = 0; i < instructionsArray.length; i++) {
        if (sequence.length === 0) {
            gameInstructions.innerText = instructionsArray[0]
            setTimeout(instructions2, 5000)
        } else if (userSequence.length === 1) {
            setTimeout(instructions3, 2000)
        }
    }
}

////Blocks flash and generate automated sequence

//Makes the block flash by setting the particular div to hidden, before running revertBackground to bring it back to visible. 
function blockFlash(i) {
    sequence[i].style.visibility = 'hidden'
    setTimeout(revertBackground, time)
}

function revertBackground() {
    gridBlocksArray.forEach(gridBlock => {
        gridBlock.style.visibility = 'visible'
    })
}

//generates the random sequence of flashes by taking random number between 0 and gridBlocksArray.length - 1.  That number assigns a particular gridblock to the sequence array.  Also clears the userSequence that was submitted for  the previous round, so that user reenters new sequence after new automated sequence has run. 
function generateSequence() {
    let num = Math.floor(Math.random() * gridBlocksArray.length)
    sequence.push(gridBlocksArray[num])
    initiateSequence()
    clearUserSequence()
}

//Spaces out the blockflashes so they flash in order as opposed to running at the same time. 

function initiateSequence() {
    for (let i = 0; i < sequence.length; i++) {
        let newTime = i * 700
        x = setTimeout(function () { blockFlash(i) }, newTime)
    }
}

//begins running the automated sequence based off of the given conditions. The sequence runs at the beginning of the game when no sequence has previsouly been run.  After that, the sequence will run only after the user has submitted their sequence and it has been confirmed to match the automated sequence. 
function finalSequenceStart() {
    if (sequence.length === 0) {
        generateSequence()
    } else if (sequence.length !== 0) {
        if (generateFlag.length === sequence.length) {
            generateSequence()
        }
    }
}

//delays start of sequence so user has time to read instructions and see the initial block flash
function delayedSequenceStart() {
    setTimeout(finalSequenceStart, 4000)
    instructions()
}


////Blocks flash on user click and store user sequence

//Makes the block flash by setting the visibility to hidden, then using revertbackground to chnage it back.  
function userBlockFlash(block) {
    block.style.visibility = 'hidden'
    setTimeout(revertBackground, time)
}

//Triggers the block flash when a user clicks that block.  Also stores the sequence of blocks clicked in an array to be used to compare against the automated sequence. 
function userSequenceInitiate() {
    gridBlocksArray.forEach(gridBlock => {
        gridBlock.addEventListener('click', (event) => {
            let block = event.target
            userBlockFlash(block)
            userSequence.push(event.target)
        })
    })
};

userSequenceInitiate()

//clears the user sequence array so that the next sequence can be added and compared correctly against the automated sequence. 
function clearUserSequence() {
    for (let i = 0; i = userSequence.length; i++) {
        userSequence.shift()
    }
}

////Compare the sequences

//Comparing the automated sequence to the user generated sequence by pushing all of the similar values into a new array., then comparing the length of those three arrays to ensure they are equal.  If equal: advance to the next round, increase the score by one, push generate into the generateflag array, add blocks (based on user progress) , and restart a new automated sequence.  Otherwise: tell the user' game over' and stop acticvity.   
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
        autoAddBlocks()
        delayedSequenceStart()
    } else {
        resultMessage.innerText = 'result: game over'
    }
    setTimeout(clearComparisonSequence, 200)
}

// adds blocks to div after first sequence, and then every 4 sequences afterwards until 12 blocks in total are available.   
function autoAddBlocks() {
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


//Clear comparison sequence for the next sequence 
function clearComparisonSequence() {
    for (let i = 0; i = comparisonSequence.length; i++) {
        comparisonSequence.shift()
    }
}

//Submit button triggers the compare sequences function and must be clicked after user has completed inputting their sequence for that turn.  
submitButton.addEventListener('click', compareSequences)


// Clear sequence reloads the page
function clearSequence() {
    location.reload()
}

//triggers page reload which starts a new game, wiping out all arrays and blocks except one.  Automated sequence is set to run on page load as well. 
newGameButton.addEventListener('click', clearSequence)


////Adding blocks 

//add blocks to the gridBlocks array with the corresponding classes and event listeners.  This is used when submitting a sequence to add blocks automatically as the user progresses. 

function addBlocks() {
    const newBlock = document.createElement('div')
    gridDiv.appendChild(newBlock)
    newBlock.classList.add('grid-block')
    blockIndex++
    newBlock.classList.add(`gb${blockIndex}`)
    gridBlocksArray.push(newBlock)
    newBlock.addEventListener('click', (event) => {
        let block = event.target
        userBlockFlash(block)
        userSequence.push(event.target)
    })
}

//triggers the automated sequence to run when the page is loaded.  Triggered when new game is selected.  
function autoLoadSequence() {
    document.body.onload = delayedSequenceStart()
}
/////////////TURN BACK ON/////////
autoLoadSequence()













///////////remove once css styling is done
addBlockButton.addEventListener('click', (event) => {
    addBlocks()
    // addBlocks()
})




/////////////////////////MVP/////////////////////////////

// // Make blocks clickable. 
// const gridBlocks = document.querySelectorAll('.grid-block')
// const gridBlocksArray = Array.from(gridBlocks)
// const sequence = []
// const userSequence = []

// //make the blocks flash 

// function blockFlash(i) {
//     sequence[i].style.visibility = 'hidden'
//     setTimeout(revertBackground, time)
// }

// //make blocks flash

// function finalSequenceStart() {
//     if (sequence.length === 0) {
//         generateSequence()
//     } else if (sequence.length !== 0) {
//         if (generateFlag.length === sequence.length) {
//             generateSequence()
//         } else {
//             console.log('user plays first')
//         }
//     }
// }
// //delays start of sequence so user sees it 
// function delayedSequenceStart() {
//     setTimeout(finalSequenceStart, 2000)
// }

// //generates the auto sequence

// function generateSequence() {
//     let num = Math.floor(Math.random() * gridBlocksArray.length)
//     sequence.push(gridBlocksArray[num])
//     console.log(sequence)
//     initiateSequence()
//     clearUserSequence()
// }


// //trigger the computer generated sequence 
// let time = 150
// let newTime = 0

// function initiateSequence() {
//     for (let i = 0; i < sequence.length; i++) {
//         let newTime = i * 700
//         x = setTimeout(function () { blockFlash(i) }, newTime)
//     }
// }

// //Store the user initiated sequence 
// //   
// function userSequenceInitiate() {
//     gridBlocksArray.forEach(gridBlock => {
//         gridBlock.addEventListener('click', (event) => {
//             let block = event.target
//             userBlockFlash(block)
//             userSequence.push(event.target)
//             console.log(userSequence)
//         })
//     })
// };

// userSequenceInitiate()

// function userBlockFlash(block) {
//     block.style.visibility = 'hidden'
//     setTimeout(revertBackground, time)
// }


// function revertBackground() {
//     gridBlocksArray.forEach(gridBlock => {
//         gridBlock.style.visibility = 'visible'
//     })
// }


// //clear the user sequence
// function clearUserSequence() {
//     for (let i = 0; i = userSequence.length; i++) {
//         userSequence.shift()
//     }
//     console.log(userSequence)
// }


// //compare the sequences
// // run generate if correct, clear if incorrect 
// const comparisonSequence = []
// const generateFlag = []
// const resultMessage = document.querySelector('#result')
// const memories = document.querySelector('#memories')

// function compareSequences() {
//     for (let i = 0; i < sequence.length; i++) {
//         if (sequence[i] === userSequence[i]) {
//             comparisonSequence.push(sequence[i])
//         }
//     }
//     if (comparisonSequence.length === sequence.length && sequence.length === userSequence.length) {
//         resultMessage.innerText = 'result: advance'
//         score.innerText = 'score: ' + sequence.length
//         generateFlag.push('generate')
//         console.log(generateFlag)
//         delayedSequenceStart()
//     } else {
//         resultMessage.innerText = 'result: game over'
//     }
//     console.log(comparisonSequence)
//     setTimeout(clearComparisonSequence, 200)
// }


// //clear comparisonSequence
// function clearComparisonSequence() {
//     for (let i = 0; i = comparisonSequence.length; i++) {
//         comparisonSequence.shift()
//     }
//     console.log(comparisonSequence)
// }


// const submitButton = document.querySelector('#submit')
// submitButton.addEventListener('click', compareSequences)

// //new game button clears sequence array 
// const newGameButton = document.querySelector('#new-game')

// function clearSequence() {
//     for (let i = 0; i = sequence.length; i++) {
//         sequence.shift()
//     }
//     console.log(sequence)
//     clearGenerateFlag()
//     score.innerText = 'score:'
//     resultMessage.innerText = 'result:'
//     delayedSequenceStart()
// }

// newGameButton.addEventListener('click', clearSequence)


// //game over needs to clear the submit sequence. Add to clearSequence()

// function clearGenerateFlag() {
//     for (let i = 0; i = generateFlag.length; i++) {
//         generateFlag.shift()
//     }
//     console.log(generateFlag)
// }
