// Make blocks clickable. 
const gridBlocks = document.querySelectorAll('.grid-block')
const gridBlocksArray = Array.from(gridBlocks)
const sequence = []
const userSequence = []

//make the blocks flash 

function delay(i) {
    sequence[i].style.visibility = 'hidden'
    setTimeout(revertBackground, time)
}

//make blocks flash

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
    setTimeout(finalSequenceStart, 2000)
}

//generates the auto sequence

function generateSequence() {
    let num = Math.floor(Math.random() * gridBlocksArray.length)
    sequence.push(gridBlocksArray[num])
    console.log(sequence)
    initiateSequence()
    clearUserSequence()
}


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

userSequenceInitiate()

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
    }
    console.log(comparisonSequence)
    setTimeout(clearComparisonSequence, 200)
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
    score.innerText = 'score:'
    resultMessage.innerText = 'result:'
    delayedSequenceStart()
}

newGameButton.addEventListener('click', clearSequence)


//game over needs to clear the submit sequence. Add to clearSequence()

function clearGenerateFlag() {
    for (let i = 0; i = generateFlag.length; i++) {
        generateFlag.shift()
    }
    console.log(generateFlag)
}
