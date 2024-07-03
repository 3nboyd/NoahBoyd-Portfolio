const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
    project.addEventListener('mouseover', () => {
        project.style.height = '400px';
    });

    project.addEventListener('mouseout', () => {
        project.style.height = '200px';
    });
}); //^^^I could have definitely done this on css but oh well
// loading screen on every page
