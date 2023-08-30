class Code {
  constructor(codeSlides) {
    this.codeSlides = codeSlides;

    this.javascriptCode = document.getElementById("javascriptCode");
    this.pythonCode = document.getElementById("pythonCode");
    this.rubyCode = document.getElementById("rubyCode");
    this.close = document.getElementById("closecode");
    // adding event listener to close, javascriptCode, pythonCode buttons
    this.javascriptCode.addEventListener("click", this.clickHandle.bind(this));
    this.pythonCode.addEventListener("click", this.clickHandle.bind(this));
    this.rubyCode.addEventListener("click", this.clickHandle.bind(this));
    this.close.addEventListener("click", this.clickHandle.bind(this));
  }

  showSlide(lang) {
    document
      .querySelectorAll("pre")
      .forEach((pre) => (pre.style.display = "none"));
    document.getElementById(lang).style.display = "flex";
  }

  hideSlide() {
    document.getElementById("code-container").style.display = "none";
    document
      .querySelectorAll("pre")
      .forEach((pre) => (pre.style.display = "none"));
    document.getElementById("java").style.display = "flex";
    document.getElementById("canvas-container").style.display = "flex";
  }

  clickHandle(event) {
    if (event.target.id === "javascriptCode") {
      this.showSlide("java");
    } else if (event.target.id === "pythonCode") {
      this.showSlide("python");
    } else if (event.target.id === "rubyCode") {
      this.showSlide("ruby");
    } else if (event.target.id === "closecode") {
      this.hideSlide();
      document.getElementById("code").name = "false";
    }
  }
}

export default Code;
