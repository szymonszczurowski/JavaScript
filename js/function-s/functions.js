// deklaracaj funkcji

// Hoisting polega na wynoszeniu deklaracji zmiennych i funkcji „na górę” kodu (konkretnie na początek funkcji lub do zakresu zmiennych globalnych, w zależności od tego, gdzie dana zmienna lub funkcja została zadeklarowana). Oznacza to, że można odwołać się do zmiennej lub funkcji zanim jeszcze zostanie zadeklarowana.
// jest to trochę złe, ponieważ psuje porządek w kodzie, ale mozę być tylko trzeba samemu pilnować porząku w kodzie, pomocą może byc w tym funkcja strzałkowa ES6

function test() {
	console.log('cześć')
}

test()

// wyrażenie funkcyjne

const helloWorld = function () {
	console.log('cześć! 123')
}

// funkcje parametrami, argumetanmi

// parametr podajmey podczas tworzenia funkcji
//argumnet podjaemy podczas wywołania funkcji

function add(parm) {
	console.log('Podajny argument to: ' + parm)
}

add('test')

function add2(x, y) {
	return x + y
}

add2(5, 5)
