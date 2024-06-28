// Get the banner element
const banner = document.querySelector('.background-image');

// Add an event listener to the window's load event
window.addEventListener('load', () => {
  // Animate the banner
  banner.classList.add('animate');
});

// Add an event listener to the banner's animation end event
banner.addEventListener('animationend', () => {
  // Remove the animation class
  banner.classList.remove('animate');
});