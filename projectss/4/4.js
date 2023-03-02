const one = document.querySelector('.one')
const two = document.querySelector('.two')
const changeBtn = document.querySelector('.change')
const inputElement = document.querySelector('#converter')
const convBtn = document.querySelector('.conv')
const paragraph = document.querySelector('.result')
const reset = document.querySelector('.reset')


const change = () => {
    if(one.textContent == '°C'){
        one.textContent = '°F'
        two.textContent = '°C'
        paragraph.value = ''

    }else{
        one.textContent = '°C'
        two.textContent = '°F'
        paragraph.value = ''
    }
}


const convert = () => {
    const inputValue = inputElement.value
    const intValue = parseInt(inputValue)
    let result

    if(one.textContent == '°C'){
        result = intValue * 1.8 + 32
        paragraph.textContent = `${inputValue}°C to ${result.toFixed(1)}°F`

    }else{
        result = (intValue - 32) / 1.8
        paragraph.textContent = `${inputValue}°F to ${result.toFixed(1)}°C `

    }

    inputElement.value = ''
}

const resetFunction = () => {
    inputElement.value = ''
    paragraph.textContent = ''
}

changeBtn.addEventListener('click', change)
convBtn.addEventListener('click', convert)
reset.addEventListener('click', resetFunction)

//INNA WERSJA 

// let fahr
// let cel

// const fahrToCel = () => {
//     fahr = inputElement.value * 1.8 + 32 
//     paragraph.textContent = `${inputElement.value}°C to ${fahr.toFixed(1)}°F`
//     inputElement.value = ''

// }

// const celToFahr = () => {
//     cel = (inputElement.value -32) / 1.8 
//     paragraph.textContent = `${inputElement.value}°C to ${cel.toFixed(1)}°F`
//     inputElement.value = ''

// }

// const conversion = () => {
//     if(inputElement.value !== ''){
        
//         if(one.textContent == '°C'){
//             fahrToCel()
//         }else{
//             celToFahr()
//         }

//     }else{
//         paragraph.textContent = 'Musisz podać jakąs wartość'
//     }
// }

// convBtn.addEventListener('click', conversion)