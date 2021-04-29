
// Make blocks clickable. Need to remove the clicking in the gap and have it set to only the div if possible  
const gridBlock1 = document.querySelector('.gb1')
const gridBlock2 = document.querySelector('.gb2')


gridBlock1.addEventListener('click', (event) => {
    console.log(event.target)
})

gridBlock2.addEventListener('click', (event) => {
    console.log(event.target)
})
