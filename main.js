// Get the button:
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    document.documentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}