class Button {
  constructor(button) {
    this.button = button;
    this.button.addEventListener("click", this.clickHandle.bind(this));
  }

  clickHandle() {
    document.getElementById("slide-container").style.display = "flex";
  }
}

export default Button;
