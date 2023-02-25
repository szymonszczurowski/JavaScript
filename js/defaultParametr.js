// CZEŚĆ imie, jak się masz?
// nfn - skrót do funkcji strzałkowej


// parametr domyślny
const hello = (name = 'drogi użytkowniku') => {
	console.log(`Cześć ${name}, jak się masz?`)
}
hello()
// hello('marcin')



const add = (x = 5, y = 10) => {
    console.log(x + y);
}
add()
// add(10,10)