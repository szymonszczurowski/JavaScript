const num = [0.5, 4, 'abc']
const names = ['lisa', 'lily', 'adam', 'przemek']

num.forEach(x => console.log(x * x))

// map zwraca nową tablicę
const bigName = names.map(name => name.toUpperCase())
console.log(bigName)

//callback
const showBigNames = name => {
	console.log(name.toUpperCase())
}

names.forEach(showBigNames)

// lub
console.log('------------------');
names.forEach(el => console.log(el.toUpperCase()))