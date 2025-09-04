function cycleTestimonialsLeft(testimonial_num) {
    if (testimonial_num === 1) {
        document.getElementById("testimonial-1").style.visibility = "hidden";
        document.getElementById("testimonial-3").style.visibility = "visible";
    } else if (testimonial_num === 2) {
        document.getElementById("testimonial-2").style.visibility = "hidden";
        document.getElementById("testimonial-1").style.visibility = "visible";
    } else if (testimonial_num === 3) {
        document.getElementById("testimonial-3").style.visibility = "hidden";
        document.getElementById("testimonial-2").style.visibility = "visible";
    }
}

function cycleTestimonialsRight(testimonial_num) {
    if (testimonial_num === 1) {
        document.getElementById("testimonial-1").style.visibility = "hidden";
        document.getElementById("testimonial-2").style.visibility = "visible";
    } else if (testimonial_num === 2) {
        document.getElementById("testimonial-2").style.visibility = "hidden";
        document.getElementById("testimonial-3").style.visibility = "visible";
    } else if (testimonial_num === 3) {
        document.getElementById("testimonial-3").style.visibility = "hidden";
        document.getElementById("testimonial-1").style.visibility = "visible";
    }
}