let rate = 12 ;
function giveValue() {
    const selectElement = document.getElementById('mySelect');
    rate = selectElement.value;
}

let seatCount = 0;
const seats = document.querySelectorAll(".seat");
seats.forEach(function (seat) {
    seat.addEventListener('click', function (e) {
        if (seat.classList.contains('bg-[#4b5056]')) {
            seat.classList.remove('bg-[#4b5056]')
            seat.classList.add('bg-[#6feaf6]')
            seatCount++;
        } else if (seat.classList.contains('bg-[#6feaf6]')) {
            seat.classList.remove('bg-[#6feaf6]')
            seat.classList.add('bg-[#4b5056]')
            seatCount--;
        }
        rateUpdate();
        console.log(seatCount);

    })
})

function rateUpdate() {
    document.querySelector('#noOfSeats').textContent = seatCount;
    document.querySelector('#totalPrice').textContent = "₹" + seatCount * rate;
}