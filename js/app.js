// particlesJS.load('particles-js', 'particles.json')

$(document).foundation();

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#sticky-header").addClass("active");
    }
    else {
        $("#sticky-header").removeClass("active");
    }
});

console.log("%cWelcome To Cucumber", "font-size: x-large")
