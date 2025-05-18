document.addEventListener('DOMContentLoaded', () => {
    const reserveBtn  = document.getElementById('reserve-button');
    const bookingForm = document.getElementById('booking-form');

    reserveBtn.addEventListener('click', e => {
    e.preventDefault();
    bookingForm.classList.toggle('show'); 
    bookingForm.scrollIntoView({ behavior: 'smooth' }); 
    });
});