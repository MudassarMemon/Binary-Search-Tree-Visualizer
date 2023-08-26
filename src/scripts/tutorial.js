class Tutorial {
  constructor(el) {
    this.el = el;
    this.el.addEventListener("click", this.clickHandle.bind(this));
  }

  clickHandle() {
    console.log("click");
    document.getElementById("sidebar").style.width = "300px";
  }
}

module.exports = Tutorial;
