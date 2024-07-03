//this is for the unhide button
function showEmail() {
    const emailBtn = document.querySelector('.hidden-email-btn');
    const emailDisplay = document.querySelector('#email-address-display');
    
    emailBtn.style.display = 'none';
    emailDisplay.textContent = 'noahbboyd@gmail.com';
  }