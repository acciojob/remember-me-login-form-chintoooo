// script.js

// Select elements from the DOM
const loginForm = document.getElementById('loginForm');
const existingButton = document.getElementById('existing');

// Check if saved credentials exist and display the 'Login as existing user' button if needed
window.onload = function () {
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingButton.style.display = 'block';
  }
};

// Handle form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('checkbox').checked;

  if (rememberMe) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`);
  checkForExistingUser(); // Check if the button needs to appear
});

// Display the 'Login as existing user' button if credentials are present
function checkForExistingUser() {
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingButton.style.display = 'block';
  }
}

// Handle 'Login as existing user' button click
existingButton.addEventListener('click', () => {
  const savedUsername = localStorage.getItem('username');
  alert(`Logged in as ${savedUsername}`);
});
