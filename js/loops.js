// FOR

// for(let i = 0; i < 4; i++){
//     console.log(i);
// }

const animal = ['pies', 'kot', 'slon', 'malpka', 'krowa']

console.log(animal[1])

console.log('-----------------')

for (i = 0; i < animal.length; i++) {
	console.log(animal[i])
}

// WHILE // najpierw sprawdza warunek
console.log('-----------------')

let x = 0
while (x < 5) {
	x++
	console.log(x)
}

// DO WHILE // warunek sprawdza na końcu
console.log('-----------------')

let y = 0

do {
	y++
	console.log(y)
} while (y < 2)

//FOR OF
console.log('-----------------')

const numbers = [1, 2, 3, 4, 5]



// for np. do pracy z indexami
// for(let k = 0; k < numbers.length; k++){
//     console.log(numbers[k]*2);
// }



// vs

// for of np. przeliterować
for (const number of numbers){
    console.log(number * 2);
}


//FOR IN - BĘDZIE POŹNIEJ


