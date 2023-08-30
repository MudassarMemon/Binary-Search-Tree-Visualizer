import { Arrow, Circle, Node, BinarySearchTree } from "./bst";

class Button {
  static bst = null;

  constructor(button) {
    this.button = button;
    this.button.addEventListener("click", this.clickHandle.bind(this));
  }

  clickHandle() {
    if (this.button.id === "lessons") {
      this.lesson();
    } else if (this.button.id === "code") {
      this.code();
    } else if (this.button.id === "generate-random") {
      this.generate();
    } else if (this.button.id === "insert") {
      let num = document.querySelector("input#insert").value;
      document.querySelector("input#insert").value = "";
      this.insert(num);
    } else if (this.button.id === "remove") {
      let num = document.querySelector("input#remove").value;
      document.querySelector("input#remove").value = "";
      this.remove(num);
    } else if (this.button.id === "search") {
      let num = document.querySelector("input#search").value;
      document.querySelector("input#search").value = "";
      this.search(num);
    } else if (this.button.id === "traverse") {
      this.traverse();
    }
  }

  lesson() {
    if (document.getElementById("lessons").name === "false") {
      document.getElementById("slide-container").style.display = "flex";
      document.getElementById("lessons").name = "true";
      document.getElementById("canvas-container").style.display = "none";

      document.getElementById("code-container").style.display = "none";
      document.getElementById("code").name = "false";
    } else {
      document.getElementById("slide-container").style.display = "none";
      document.getElementById("lessons").name = "false";
      document.getElementById("canvas-container").style.display = "flex";
    }
  }

  code() {
    if (document.getElementById("code").name === "false") {
      document.getElementById("code-container").style.display = "flex";
      document.getElementById("code").name = "true";
      document.getElementById("canvas-container").style.display = "none";

      document.getElementById("slide-container").style.display = "none";
      document.getElementById("lessons").name = "false";
    } else {
      document.getElementById("code-container").style.display = "none";
      document.getElementById("code").name = "false";
      document.getElementById("canvas-container").style.display = "flex";
    }
  }

  generate() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, 1500, 700);

    const uniqueNums = [];

    while (uniqueNums.length < 4) {
      let randomNum = Math.floor(Math.random() * 100);
      if (
        !uniqueNums.includes(randomNum) &&
        randomNum > 0 &&
        randomNum >= 40 &&
        randomNum <= 60
      ) {
        uniqueNums.push(randomNum);
      }
    }

    while (uniqueNums.length < 8) {
      let randomNum = Math.floor(Math.random() * 100);
      if (!uniqueNums.includes(randomNum) && randomNum > 0 && randomNum < 40) {
        uniqueNums.push(randomNum);
      }
    }

    while (uniqueNums.length < 12) {
      let randomNum = Math.floor(Math.random() * 100);
      if (!uniqueNums.includes(randomNum) && randomNum > 0 && randomNum > 60) {
        uniqueNums.push(randomNum);
      }
    }

    Button.bst = new BinarySearchTree();

    uniqueNums.forEach((num) => Button.bst.insert(num));
  }

  insert(num) {
    console.log("adding...");
    Button.bst.insert(num);
  }

  remove(num) {
    console.log("removing...");
    Button.bst.remove(num);
  }

  search(num) {
    console.log("search...");
    Button.bst.search(num);
  }
}

export default Button;
