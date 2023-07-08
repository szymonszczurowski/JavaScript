// STRING

const text = 'abcd'
console.log(typeof text)

const quote = 'zdanie - "ejo"'
console.log(quote)

//meotdy String -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//np.
console.log(text.length)
console.log(text.toUpperCase())
console.log(text.charAt(0).toUpperCase())
console.log(text.slice(1))

//locale służy np. do takich sytuacji:
const date = new Date()
console.log(date.toLocaleDateString('en'))
console.log(date.toLocaleDateString('eu'))

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////


// NUMBER
const num1 = 23
const num2 = '45'

console.log(num1 + num2) // konkatenacja

//tip: jeśli pomożymy String jedynką otrzymamy liczbe (Ciekawostka tylko)
console.log(num2 * 1)

//meotdy String - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const num3 = 1231.1231
console.log(num3.toFixed()) // zaokrągla
console.log(num3.toFixed(2))

const num4 = '123'
console.log(parseInt(num4)) //konwersja liczby w postaci stringa na int

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

//BOOLEAN (TRUE/FALSE)

//FALSE zawze zwraca: false, undefinded, Null, 0, NaN, '' - pusty string


///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////


//null & undefinded (nic) jak chcemy przypisać sami coś z tych dwóch rzeczy to używamy null, drugie zwraca sam js

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// TYPY ZŁOŻONE

//tablice
const tab = ['red', 'green', 'blue', 'black', 'white', 123, 345, true, ['abcd']]
console.log(tab);

const colors = ['red', 'green', 'blue', 'black', 'white']
console.log(colors);

//funkcje

function test() {
    console.log('hej');
}

test()

//obiekt 

const person = {
    name: 'roberto',
    age: 22,
    favColor: null
}

console.log(person);

