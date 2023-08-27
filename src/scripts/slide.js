class Slide {
  constructor(slide, index, slides) {
    this.slide = slide;
    this.index = index;
    this.slides = slides;

    //adding event listener to close, next, prev buttons
    this.slide.children[0].addEventListener(
      "click",
      this.clickHandle.bind(this)
    );
    this.slide.children[1].addEventListener(
      "click",
      this.clickHandle.bind(this)
    );
    this.slide.children[2].addEventListener(
      "click",
      this.clickHandle.bind(this)
    );
  }

  showSlide(index) {
    for (let i = 0; i < this.slides.length - 1; i++) {
      if (i === index) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  }

  hideSlide() {
    document.getElementById("slide-container").style.display = "none";
  }

  clickHandle(event) {
    if (event.target.id === "next") {
      this.showSlide(this.index + 1);
    } else if (event.target.id === "prev") {
      this.showSlide(this.index - 1);
    } else if (event.target.id === "close") {
      this.hideSlide();
    }

    // if (currentSlideIndex < 0) {
    //   currentSlideIndex = 0;
    // } else if (currentSlideIndex >= slides.length) {
    //   currentSlideIndex = slides.length - 1;
    // }
  }
}

export default Slide;
