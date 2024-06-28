let isFirstVisit = true;

document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.querySelector(".background-image");
  const video = videoContainer.querySelector("video"); // assuming the video element is inside .background-image

  // Check if the user is at the top of the page and if it's the first visit
  if (window.scrollY === 0 && isFirstVisit) {
    // Play the video
    video.play();

    // Add the animate class
    videoContainer.classList.add("animate");
  } else {
    // If it's not the first visit or the user is not at the top of the page, skip the animation
    videoContainer.classList.add("minimized");
  }

  // Add the minimized class after the animation ends (if animation was triggered)
  videoContainer.addEventListener("animationend", function() {
    videoContainer.classList.add("minimized");

    // Remove the minimized class after 3 seconds
    setTimeout(function() {
      videoContainer.classList.remove("minimized");
    }, 3000);
  });

  // Set flag to false for subsequent visits
  isFirstVisit = false;
});

// Set a session storage key to track if the user has visited the page before
if (!sessionStorage.getItem("hasVisited")) {
  sessionStorage.setItem("hasVisited", true);
} else {
  isFirstVisit = false;
}

document.addEventListener("DOMContentLoaded", function() {
  if (isFirstVisit) {
    // Add the class to lock scrolling
    document.body.classList.add("no-scroll");

    // Remove the class after 2.5 seconds
    setTimeout(function() {
      document.body.classList.remove("no-scroll");
    }, 2500);
  }
});