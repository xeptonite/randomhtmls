// Get the modal and buttons
const openPopupButton = document.getElementById('open-popup-btn');
const closePopupButton = document.getElementById('close-popup-btn');
const popup = document.getElementById('event-popup');

// Open the popup modal
openPopupButton.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the popup
});

// Close the popup modal
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});
