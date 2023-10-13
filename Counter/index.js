let count = 0;
const countElem = document.querySelector('.count');
const allbtns = document.querySelectorAll('.button');


document.querySelector('.decrease').addEventListener('click', function () {
    count = count - 1;
    run() ;
})

document.querySelector('.reset').addEventListener('click', function () {
    count = 0;
    run() ;
})

document.querySelector('.increase').addEventListener('click', function () {
    count = count + 1; 
    run();
})

function run() {
    if (count < 0) {
        countElem.style.color = 'red';
    } else if (count==0) {
        countElem.style.color = 'black';
    } else if (count > 0) {
        countElem.style.color = 'green';
    }
    countElem.textContent = count;
}


