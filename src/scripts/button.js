class Button {
  constructor(button) {
    this.button = button;
    this.button.addEventListener("click", this.clickHandle.bind(this));
  }

  clickHandle() {
    if (this.button.id === "close") {
      document
        .querySelectorAll(".tutorial")
        .forEach((div) => (div.style.display = "none"));
    } else if (this.button.className === "tab-button") {
      document
        .querySelectorAll(".tutorial")
        .forEach((div) => (div.style.display = "none"));
      let tabToOpen = this.button.id;
      document.querySelector(`div#${tabToOpen}`).style.display = "block";
    } else if (this.button.id === "sidebar") {
      document.querySelector("aside#sidebar").style.width = "0";
    } else if (this.button.className === "open-tutorial") {
      document
        .querySelectorAll(".tutorial")
        .forEach((div) => (div.style.display = "none"));
      let tabToOpen = this.button.id;
      if (tabToOpen === "tree-tutorial") {
        tabToOpen = "data-structures";
      } else {
        tabToOpen = "algorithm";
      }
      document.querySelector(`div#${tabToOpen}`).style.display = "block";
    }
  }
}

module.exports = Button;
