function initCarousel() {
    const arrowLeftEl = document.querySelector('.carousel__arrow_left');
    const arrowRightEl = document.querySelector('.carousel__arrow_right');
    const carouselInnerEl = document.querySelector('.carousel__inner');
    const slideWidth = document.querySelector('.carousel__slide').offsetWidth;
    const stopSlideRight = -(carouselInnerEl.children.length - 1);
    const stopSlideLeft = 0;
    let currentSlide = 0;
    arrowLeftEl.style.display = 'none';

    arrowLeftEl.addEventListener('click', (event) => {
        carouselInnerEl.style.transform = `translateX(${slideWidth * ++currentSlide}px)`;
        if (currentSlide === stopSlideLeft) {
            arrowLeftEl.style.display = 'none';
        }
        arrowRightEl.style.display = '';
    });

    arrowRightEl.addEventListener('click', (event) => {
        carouselInnerEl.style.transform = `translateX(${slideWidth * --currentSlide}px)`;
        if (currentSlide === stopSlideRight) {
            arrowRightEl.style.display = 'none';
        }
        arrowLeftEl.style.display = '';
    });
}