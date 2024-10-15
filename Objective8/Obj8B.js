let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.fade');
    
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset index to loop
    }

    
    slides[slideIndex].classList.add('active');
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


document.addEventListener("DOMContentLoaded", function() {

    const startMessage = document.getElementById('startMessage');
    const dynamicText = document.getElementById('dynamicText');
    
    dynamicText.textContent = "Enjoy the slideshow presentation!";
    
    
    startMessage.style.display = 'block'; 

    setTimeout(() => {
        startMessage.style.display = 'none'; 
        showSlides(); 
    }, 3000); 
});



