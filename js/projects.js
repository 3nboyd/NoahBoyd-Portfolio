
// projects.js
const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
    project.addEventListener('mouseover', () => {
        project.style.height = '400px';
    });

    project.addEventListener('mouseout', () => {
        project.style.height = '200px';
    });
});
// loading screen on every page
$(window).on("load", function(){
    $(".nb-loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
})