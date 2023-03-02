const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const paragraph = document.querySelector('p')

const fszUp = () => {
	const style = window.getComputedStyle(paragraph)
	size = style.getPropertyValue('font-size')
	size = parseInt(size)
	size += 5

	if (size <= 56) {
		paragraph.style.fontSize = size + 'px'
	}
}

const fszDown = () => {
	const style = window.getComputedStyle(paragraph)
	size = style.getPropertyValue('font-size')
	size = parseInt(size)
	size -= 5

	if (size >= 21) {
		paragraph.style.fontSize = size + 'px'
	}
}

const changeColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    paragraph.style.color = `rgb(${r}, ${g}, ${b})`
}

sizeUp.addEventListener('click', fszUp)
sizeDown.addEventListener('click', fszDown)
color.addEventListener('click', changeColor)

//-------------------------------------
// MOŻNA ZROBIĆ TO TAK JAK PONIŻEJ
//-------------------------------------

// let fontSise = 36
// const fszUp2 = () => {
//     fontSise += 5
//     paragraph.style.fontSize = fontSise + 'px'

// }

// const fszDown2 = () => {
//     if (fontSise <= 21) return
//     fontSise -= 5
//     paragraph.style.fontSize = fontSise + 'px'

// }
// sizeUp.addEventListener('click', fszUp2)
// sizeUp.addEventListener('click', fszDown2)

