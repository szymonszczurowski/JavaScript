const heading = document.querySelector('h1')


//FUNKCJA ANONIMOWA
// lepiej z nich nie korzystać. W większym kodzie nie czytelny, nie można sie do niego odwoływać

heading.addEventListener('click', function(){
    console.log('Kliknęto mnie!');
}
)

// lepiej w taki sposób:

function test(){
    console.log('Kliknęto mnie!');
}

heading.addEventListener('click', test)