let navbarSections = document.querySelectorAll('.sections li a');
// this is for the functionality of the active class in making it purple, thank you Youtube once again
navbarSections.forEach((section) => {
  section.addEventListener('click', (e) => {
    const currentSection = e.target;
    navbarSections.forEach((section) => {
      section.classList.remove('active');
    });
    currentSection.classList.add('active');
  });
});

function setActiveSection() {
  const currentUrl = window.location.href;
  navbarSections.forEach((section) => {
    const sectionHref = section.getAttribute('href');
    if (currentUrl.includes(sectionHref)) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('load', setActiveSection);