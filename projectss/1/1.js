const img = document.querySelector('.item1')
const btn = document.querySelector('.arrow')
const item = document.querySelector('.fas')



const show = () => {
    img.classList.toggle('hide')

    if(img.classList.contains('hide')){
        item.style.transform = 'rotate(180deg)'
    }else{
        item.style.transform = 'rotate(0)'
    }
}


btn.addEventListener('click', show)