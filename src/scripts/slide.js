class Slide {
  constructor(slides) {
    this.slides = slides;
    this.index = 0;

    this.next = document.getElementById("next");
    this.prev = document.getElementById("prev");
    this.close = document.getElementById("close");

    // adding event listener to close, next, prev buttons
    this.next.addEventListener("click", this.clickHandle.bind(this));
    this.prev.addEventListener("click", this.clickHandle.bind(this));
    this.close.addEventListener("click", this.clickHandle.bind(this));
  }

  showSlide(index) {
    for (let i = 0; i < this.slides.length; i++) {
      if (i === index) {
        this.slides[i].style.display = "flex";
      } else {
        this.slides[i].style.display = "none";
      }
    }
  }

  hideSlide(index) {
    document.getElementById("slide-container").style.display = "none";
    document.getElementById(`${this.index}`).style.display = "none";
    document.getElementById(`0`).style.display = "flex";
    this.index = 0;
    document.getElementById("canvas-container").style.display = "flex";
  }

  clickHandle(event) {
    if (event.target.id === "next") {
      if (this.index < 7) {
        this.index += 1;
        this.showSlide(this.index);
      }
    } else if (event.target.id === "prev") {
      if (this.index > 0) {
        this.index -= 1;
        this.showSlide(this.index);
      }
    } else if (event.target.id === "close") {
      this.hideSlide(this.index);
      document.getElementById("lessons").name = "false";
    }
  }
}

export default Slide;
