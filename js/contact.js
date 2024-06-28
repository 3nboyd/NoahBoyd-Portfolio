// contact.js

function showEmail() {
    document.querySelector('.hidden-email').innerHTML = 'noah@example.com';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // Send the form data to your server or email address
    document.getElementById('message-sent').style.display = 'block';
});
// loading screen on every page
$(window).on("load", function(){
    $(".nb-loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
})