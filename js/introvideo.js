// I don't know why I call it a banner but its kind of a banner
const banner = document.querySelector('.background-image');

//waits until its done loading to start the animation
window.addEventListener('load', () => {
  // Animate the banner
  banner.classList.add('animate');
});

// this event listener is more specifically for the ending of the animation itself
banner.addEventListener('animationend', () => {
  // Remove the animation class
  banner.classList.remove('animate');
});