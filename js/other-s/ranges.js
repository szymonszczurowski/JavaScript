// ZAKRESY

const name = 'lisa' //zakres globalny

//zakres globalny
const test = () => { 
    //zakres lokalny
    const name = "lili"
    console.log('name: ' + name); 
    const age = 22

    const test2 = () => {
        console.log(name);
        const color = 'blue'
    }
    test2()

    const test3 = () =>{
        // brak dostęu do zmiennej z funckji test 2 nawet jak jest siostrzana 
        // console.log(color);
    }
}
//zakres globalny
test()
console.log(`name - ${name}`);

//brak dosepu, bo age jest lokalny 
// console.log(age);