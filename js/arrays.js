const numbers = [1, 2, 3, 4, 5]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log(numbers)

numbers.unshift(100, 200) //dodanie elmentów na poczaek tablicy
console.log(numbers)

numbers.shift() // usuwa element na zerowym miejscu
console.log(numbers)

// - push dodaje elementy na końcu tablicy
// - pop usuwa ostatni element w tablicy

console.log('------------------------')

const numbers2 = [1, 2, 3, 4, 5]

function multiply(x) {
	return x * 2
}

// MAP - metod destrukcyjna

const newNumbers = numbers.map(multiply) //map działa jak pętla // iteruje tablice i wywołuje funkcję
console.log(numbers)
console.log(newNumbers)

/*
map():
-podobna do pętli, wykonuje jakiś kod na każdym elemencie tablicy,
-w nawiasach poajemy nazwę funckji, której kod ma się wykonywać na elemtach tablicy
-zwraca nową tablicę 
*/

console.log('------------------------')

// CONTACT - niedestrukcyjna

const abc = ['a', 'b', 'c', 'd']
const newAbc = numbers.concat(abc) // połączenie

console.log(newAbc)
console.log(numbers)

console.log('------------------------')

// SPREAD & REST // rozsmarowanie, zwraca osobne Stringi

// ...

console.log(abc)
console.log(...abc)

const drinks = ['pepsi', 'kawa', 'sok']
const meals = ['schabowy', 'spagethii', 'zupa']

const menu = [...drinks, ...meals] // można to zrobić też contact, ale spreed jest szybszy i rozsmarywuje je
console.log(menu)

console.log('------------------------')

// METODYT SLICE & SPLICE

/*
slice() – metoda niedestrukcyjna 👍
pierwszy argument – indeks elementu, od którego wycinamy (włącznie),

drugi argument – indeks elementu, do którego wycinamy (ale bez tego elementu).



splice() – metoda destrukcyjna 💣 
// ZMIENIA ZAWARTOŚĆ W GŁÓWNEJ TABLICY
pierwszy argument – indeks elementu, od którego wycinamy (włącznie),

drugi argument – ilość elementów, które wycinamy,

każdy kolejny argument – nowy element, który chcemy dodać do tablicy w miejsce wyciętego.
*/

//MOŻNA TEŻ PRACOWAĆ Z UJEMNY WARTOŚCIAMI

const numbers3 = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

console.log(numbers3)
console.log('slice')
const numbers32 = numbers3.slice(0, 2)
console.log(numbers32)

console.log('splice')
// const numbers33 = numbers3.splice(4,3)
const numbers33 = numbers3.splice(-3)
console.log(numbers33)

console.log(cars)
console.log('splice')
const cars2 = cars.splice(-2)
const randomStuff = [cars2]
console.log(cars2)

const newCars = cars.splice(2, 4, 'test')
console.log(cars)

console.log('------------------------')

//INNE METOYD

const int = [123, 2, 4, 422, 45, 12]

function number(x) {
    return x % 2 === 0
    // return x > 50
}

console.log(int.filter(number));
//callback - FUNCKJA, KTÓRĄ PRZEKAZUJEMY JAKO ARGUMENT DO INNEJ FUNKCJI

console.log("");

int.forEach(number => console.log(number * 5))

console.log("");

console.log(int.includes(2));

console.log("");

console.log(int.indexOf(345)); //jeśli nie takie elemntu to zawze zwraca -1, a w innym przypadku index pod którym jest element


console.log('------------------------')


// MAP VS FOREACH

const num = [1,1,2,3]

const newNum = num.forEach(number =>number * 2) // nie zwraca nic, bo ot foreach   //praca na wartościach bez przypisywania to forEach
console.log(newNum);

const newNum2 = num.map(number => number * 2) // zwraca //praca na wartościach i przypisywanie do nowej tablicy to map
console.log(newNum2);

