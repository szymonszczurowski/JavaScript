let info = 'es6module.js'


// named export, funckja publiczn
// trzeba dodać export jeśłi chcemy coś exportować 
export function foo(){
    console.log('foo from module1: ' + data );
}

export function bar() {
    foo()
}

let data = 99

export default data; // domyślny export