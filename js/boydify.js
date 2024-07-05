// the first visit variable is for if the user decides to reload the page so that the entire animation doesnt play again
let isFirstVisit = true;

document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.querySelector(".background-image");
  const video = videoContainer.querySelector("video"); // video element being inside the background image class

  // This part checks if the user is at the top of the page and if it's the first visit
  if (window.scrollY === 0 && isFirstVisit) {
    // Plays the video on first visit
    video.play();

    // Add the animate class
    videoContainer.classList.add("animate");
  } else {
    // If it's not the first visit or the user is not at the top of the page, it should skip the animation
    videoContainer.classList.add("minimized");
    video.currentTime = 3.5;//skips to the end of the video, change this if video length is changed
  }

  // Adds the minimized class after the animation ends (if animation was triggered)
  videoContainer.addEventListener("animationend", function() {
    videoContainer.classList.add("minimized");

    // Remove the minimized class after 3 seconds
    setTimeout(function() {
      videoContainer.classList.remove("minimized");
    }, 3000); //CHANGE THIS WITH THE CSS ANIMATION OR IT WON'T WORK CORRECTLY
  });

  // for subsequent visits
  isFirstVisit = false;
});

//this is called a session storage key, thanks Youtube
if (!sessionStorage.getItem("hasVisited")) {
  sessionStorage.setItem("hasVisited", true);
} else {
  isFirstVisit = false;
}

document.addEventListener("DOMContentLoaded", function() {
  if (isFirstVisit) {
    // this part locks the scrolling
    document.body.classList.add("no-scroll");

    // Removes the class from before after 2.5 seconds
    setTimeout(function() {
      document.body.classList.remove("no-scroll");
    }, 2500);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const closeButton = document.querySelector('.resolution-warning-close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      document.querySelector('.resolution-warning').style.display = 'none';
    });
  }
});