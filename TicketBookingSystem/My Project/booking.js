let selectedSeats = [];
const seatsPerRow = 15;
var count=0

function toggleSeat(seat) {
    seat.classList.toggle('selected');
    const seatIndex = Array.from(seat.parentElement.children).indexOf(seat);
    const rowIndex = Array.from(seat.parentElement.parentElement.children).indexOf(seat.parentElement);
    const retrive = localStorage.getItem('bookingInfo')
     alert(retrive)
    
    if (seat.classList.contains('selected')) {
        selectedSeats.push({ row: rowIndex + 1, seat: seatIndex + 1 });
        count = count + 1
    } else {
        selectedSeats = selectedSeats.filter(s => !(s.row === rowIndex + 1 && s.seat === seatIndex + 1));
    }
}


document.getElementById('confirm-button').addEventListener('click', function() {
    if (selectedSeats.length > 0) {
        const bookedSeats = selectedSeats.map(s => ` row: ${s.row}, seat: ${s.seat}`).join('; ') ;
        
        alert(`You have Stealed the seats: ${bookedSeats}`);
        var amount = count*15;
        alert(`Total Amount to be pais is: $${amount}`)
        
        
    } else {
        alert('Please select at least one seat.');
    }
});
