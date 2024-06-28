// Add keyboard navigation for buttons
$(document).keydown(function(event) {
    switch (event.key) {
        case 'a':
        case '1':
            $('a[href="about-me.html"]').click();
            break;
        case 's':
        case '2':
            $('a[href="projects.html"]').click();
            break;
        case 'd':
        case '3':
            $('a[href="music.html"]').click();
            break;
        case 'f':
        case '4':
            $('a[href="contact.html"]').click();
            break;
        case 'g':
        case '5':
            $('a[href="extras.html"]').click();
            break;
    }
});

// Add click event listeners for links
$('a').on('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    var href = $(this).attr('href');
    // Handle the link click here
    console.log('Link clicked: ' + href);
    // You can add your custom logic here to handle the link click
    // For example, you can use JavaScript to navigate to the link
    window.location.href = href;
});

// Add click event listeners for buttons// Add click event listeners for buttons
$('.button-box').on('click', function() {
    var href = $(this).find('a').attr('href');
    $(location).attr('href', href);
});

// Add links to each button
$('.button-box:eq(0) a').attr('href', 'about-me.html');
$('.button-box:eq(1) a').attr('href', 'projects.html');
$('.button-box:eq(2) a').attr('href', 'music.html');
$('.button-box:eq(3) a').attr('href', 'contact.html');
$('.button-box:eq(4) a').attr('href', 'extras.html');