let sliderIndex = 1;

function showSlides(n){
    let slides = document.getElementsByClassName('slider__item');
    console.log(slides);
    if(n > slides.length){
        sliderIndex = 1
    }
    if (n < 1){
        sliderIndex = slides.length
    }
    for (let slide of slides){
        slide.style.display = 'none';
    }
    slides[sliderIndex - 1].style.display = 'block';
}

function nextSlide(){
    showSlides(sliderIndex += 1)
}

function previusSlide(){
    showSlides(sliderIndex -= 1)
}

showSlides(sliderIndex);