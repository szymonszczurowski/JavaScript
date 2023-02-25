/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂 
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/

// const text1 = 'powiększ mnie!'
// console.log(text1.toUpperCase());
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI';
// console.log(text2.toLowerCase());
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// console.log(text3.slice(6));
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// console.log(text4.includes('czy'));
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// console.log(text5.charAt(2));
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// console.log(text6.replaceAll('pies', 'kot'));
// const text7 = 'podziel, ten, string, od, przecinków'
// console.log(text7.split(','));

//////////////////////////////////////////////////////////////////////////////////

// const x = 10

// if(10%2 == 0){
//     console.log(`${x} jest parzysta`);
// }else{
//     console.log(`${x} nie jest parzysta`);
// }

// const x = 50
// if (x >= 100) {
// 	console.log(`${x} jest większy/równy 100`)
// }else if( x < 100 && x > 30){
//     console.log(`${x} jest średniakiem`)
// }else if(x <= 30){
//     console.log(`${x} jest mały`)

// }

//////////////////////////////////////////////////////////////////////////////////

// let x = 0
// while(x < 10){
//     x += 2
//     console.log(x);
// }

// let x = 20

// do{
//     x -= 3
//     console.log(x);
// }while( x > 0)

//////////////////////////////////////////////////////////////////////////////////

// const numbers = [5, 8, 10, 23, 48, 60]

// for (const number of numbers) {
// 	console.log(number / 5)
// }

// console.log('------------------')

// const numbers2 = [5, 8, 10, 23, 48, 60]
// for (const number2 of numbers2) {
// 	if (number2 % 2 === 0) {
// 		console.log(`%cliczba ${number2} jest parzysta`, 'background-color: gold; color: black')
// 	}else {
//         console.log('\x1b[41m%s\x1b[0m', `liczba ${number2} jest nieparzysta`)

//     }
// }

//////////////////////////////////////////////////////////////////////////////////

// const letters = ['c', 'd']
// console.log(letters)
// letters.unshift('a', 'b')
// letters.push('e', 'f')
// console.log(letters)
// console.log(letters.includes('c'))

// console.log('--------------------------------')

// const number = [1, 2, 3, 4, 5, 6, 7]
// const food = ['milk', 'burger', 'sandwitch', 'apple']

// // const numFood = number.spread(food)
// const numFood = [...number, ...food]
// console.log(numFood)

// console.log('--------------------------------')

// const nums = [1, 5, 13, 26, 48]
// const newNum = nums.map(num => num * 5)
// console.log(newNum);

// for(i = 0; i < newNum.length; i++){
//     if(newNum[i] % 2 == 0){
//         console.log(`${newNum[i]} jest parzysta`);
//     }else{
//         console.log(`${newNum[i]} nie jest parzysta`);
//     }
// }

// console.log('--------------------------------')

// const colors = ['red']
// colors.unshift('blue')
// colors.push('green')

// for (const i of colors) {
//     console.log(`Mój ulubiony kolor to: ${i.charAt(0).toUpperCase() + i.slice(1)}`);
// }

// console.log('--------------------------------')

// const string = "Audi, Mercedes, BMW, Nissan, Dodge"
// const newString = string.split(', ')
// console.log(newString);

// if(newString.length > 3){
//     console.log('Jest ok');
// }else{
//     console.log("Nie jest ok");
// }

// if(newString.includes('Audi')){
//     newString.push('Reno')
// }else{
//     newString.pop()
// }

// console.log(newString);

// console.log('--------------------------------')

// // tutaj jest przykład ze zmienną globalną
// let score

// const add = (x, y) => {
// 	score = x + y

// 	// if(score % 2 == 0){
// 	//     fun1()
// 	// }else{
// 	//     fun2()
// 	// }

// 	score % 2 == 0 ? fun1() : fun2()
// }

// const fun1 = () => console.log(`Liczba ${score} jest parzysta`)
// const fun2 = () => console.log(`Liczba ${score} jest nie parzysta`)

// add(5, 6)

// // tutaj jest przykład bez zmiennej blobalnej
// console.log('-----------------');

// const add2= (x, y) => {
// 	const score = x + y

// 	// if(score % 2 == 0){
// 	//     fun1()
// 	// }else{
// 	//     fun2()
// 	// }

// 	score % 2 == 0 ? fun3(score) : fun4(score)
// }

// const fun3 = (num) => console.log(`Liczba ${num} jest parzysta`)
// const fun4 = (num) => console.log(`Liczba ${num} jest nie parzysta`)

// add2(5, 5)

// console.log('--------------------------------')

// let celsius, temp

// const fahrenheit = (c) => {
//     celsius = c

//     temp = celsius * 1.8 + 32

//     console.log(`X\xB0${celsius} = Y\xB0${temp}`);
// }

// fahrenheit(20)

// console.log('--------------------------------')

let num = 10
let numbers = []

for (i = 0; i < num; i++) {
	numbers.push(i)
}
console.log(numbers)

numbers.forEach(x => x % 3 === 0 && x !== 0 ? console.log(`${x} jest podzelnie przez 3`) : console.log(`${x} nie jest podzielene przez 3 lub ${x} równe jest 0`))

console.log('----');

//LUB

const checkNumbers = number => {
    (number % 3 === 0 && number !== 0) ? console.log(`${number} jest podzelnie przez 3`) : console.log(`${number} nie jest podzielene przez 3 lub ${number} równe jest 0`)
}

numbers.forEach(checkNumbers)