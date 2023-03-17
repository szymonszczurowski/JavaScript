// nfn - skrót do funkcji strzałkowej


function test(name) {
	console.log('imię:' + name)
}
test('szymon')

// Można zapisać w taki sposób(FUNKCJA STARZŁKOWA)

// jeżeli jest jeden argumetr nie trzeba dawać nawiasu
const test2 = (name) => {
	console.log('imię:' + name)
}
test2('szymon')


const test3 = name => console.log('imię:' + name)
test3('szymon')


const test4 = (name, age) => {
    console.log(name, age);
}
test4('szymon', 22)


function add(x, y){
    return x + y
}
add(2,2)

const add2 = (x, y) => x * y
add2(2,3)



const days = ['pon', 'wt', 'śr']
const days2 = days.forEach(function(day){
    console.log(day);
})

//lub prościej 
console.log('-------------');

const days3 = days.forEach(day => console.log(day))