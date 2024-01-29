const keys = window.document.querySelectorAll('.key')
const key_show = window.document.querySelectorAll('.keys span')
const btoSwitch = window.document.querySelector('.switcher')
const checkbox = window.document.querySelector('.checkbox_keys')


const playNote = (note) => {
    const audio = new Audio(`/notes/${note}.wav`)
    audio.play()
}

function showKeysOn() {
    btoSwitch.addEventListener('click', () => {
        btoSwitch.classList.toggle('showKeysOn')
        key_show.forEach((key) => {key.classList.toggle('disable_keys')})
    })
}




const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'))

    if (key.className.includes('sust')) {
        key.style.background = "linear-gradient(#222, black)"
        key.style.height = "113px"
        key.style.borderBottom = "none"
        return
    }

    key.style.background = "#ddd"
}

const handleMouseUp = (key) => {
    if (key.className.includes('sust')) {
        key.style.background = "linear-gradient(black, #222)"
        key.style.height = "115px"
        key.style.borderBottom = "8px solid #181818"
        return
    }

    key.style.background = "white"
}

showKeysOn()
keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
})


const KeyDownMapper = {
    "Tab" : () => handleMouseDown(keys[0]),
    "1" : () => handleMouseDown(keys[1]),
    "q" : () => handleMouseDown(keys[2]),
    "2" : () => handleMouseDown(keys[3]),
    "w" : () => handleMouseDown(keys[4]),
    "e" : () => handleMouseDown(keys[5]),
    "4" : () => handleMouseDown(keys[6]),
    "r" : () => handleMouseDown(keys[7]),
    "5" : () => handleMouseDown(keys[8]),
    "t" : () => handleMouseDown(keys[9]),
    "6" : () => handleMouseDown(keys[10]),
    "y" : () => handleMouseDown(keys[11]),
    "u" : () => handleMouseDown(keys[12]),
    "8" : () => handleMouseDown(keys[13]),
    "i" : () => handleMouseDown(keys[14]),
    "9" : () => handleMouseDown(keys[15]),
    "o" : () => handleMouseDown(keys[16]),
    "p" : () => handleMouseDown(keys[17]),
    "-" : () => handleMouseDown(keys[18]),
    "[" : () => handleMouseDown(keys[19]),
    "=" : () => handleMouseDown(keys[20]),
    "]" : () => handleMouseDown(keys[21]),
    "\\" : () => handleMouseDown(keys[22]),
    "7" : () => handleMouseDown(keys[23])
}

const KeyUpMapper = {
    "Tab" : () => handleMouseUp(keys[0]),
    "1" : () => handleMouseUp(keys[1]),
    "q" : () => handleMouseUp(keys[2]),
    "2" : () => handleMouseUp(keys[3]),
    "w" : () => handleMouseUp(keys[4]),
    "e" : () => handleMouseUp(keys[5]),
    "4" : () => handleMouseUp(keys[6]),
    "r" : () => handleMouseUp(keys[7]),
    "5" : () => handleMouseUp(keys[8]),
    "t" : () => handleMouseUp(keys[9]),
    "6" : () => handleMouseUp(keys[10]),
    "y" : () => handleMouseUp(keys[11]),
    "u" : () => handleMouseUp(keys[12]),
    "8" : () => handleMouseUp(keys[13]),
    "i" : () => handleMouseUp(keys[14]),
    "9" : () => handleMouseUp(keys[15]),
    "o" : () => handleMouseUp(keys[16]),
    "p" : () => handleMouseUp(keys[17]),
    "-" : () => handleMouseUp(keys[18]),
    "[" : () => handleMouseUp(keys[19]),
    "=" : () => handleMouseUp(keys[20]),
    "]" : () => handleMouseUp(keys[21]),
    "\\" : () => handleMouseUp(keys[22]),
    "7" : () => handleMouseUp(keys[23])
}

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    KeyDownMapper[event.key]()
})

document.addEventListener('keyup', (event) => {
    event.preventDefault()
    KeyUpMapper[event.key]()
})