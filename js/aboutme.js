// loading screen on every page
$(window).on("load", function(){
    $(".nb-loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
})