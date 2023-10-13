const btn = document.querySelector('button') ; 
const hexcode =document.querySelector('.hexcode') ;

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] ;

btn.addEventListener('click',function() {
    // get 3 random number between 0 to 255
    let strhex= "#" ;
    for (let i = 0; i < 6 ; i++) {
        strhex += hex[random()] ;
    }
    document.querySelector('body').style.backgroundColor = strhex ; 
    hexcode.textContent = strhex ;
})

function random() {
    return Math.floor(Math.random() * hex.length) ;
}