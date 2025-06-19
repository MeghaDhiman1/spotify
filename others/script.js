// Get the login button and modal elements
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');

// Add an event listener to the login button
loginBtn.addEventListener('click', function() {
  // Show the modal
  loginModal.style.display = 'block';
});



// Add an event listener to the modal itself to close it when clicked outside
window.addEventListener('click', function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});