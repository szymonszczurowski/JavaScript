//SPREAD
const arr = [1, 2, 3, 4]
console.log(arr)
console.log(...arr)

//REST - jeśli jest więcej podanych argumentów to ma złączyć je w jedną tablicę
const numbers = (x, y, ...z) => {
	console.log(x, y, z)

    console.log(z.map(el => el * 2));
}

numbers(13, 435, 542, 1, 2, 3, 434)
