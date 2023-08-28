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
    } else if (this.button.id === "generate-random") {
      this.generate();
    } else if (this.button.id === "insert-node") {
      let num = document.querySelector("input#insert").value;
      this.insert(num);
    } else if (this.button.id === "remove-node") {
      let num = document.querySelector("input#remove").value;
      this.remove(num);
    } else if (this.button.id === "search") {
      let num = document.querySelector("input#search").value;
      this.search(num);
    } else if (this.button.id === "traverse") {
      this.traverse();
    }
  }

  lesson() {
    document.getElementById("slide-container").style.display = "flex";
  }

  generate() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, 1500, 700);

    const uniqueNums = [];

    while (uniqueNums.length < 10) {
      let randomNum = Math.floor(Math.random() * 100);
      if (!uniqueNums.includes(randomNum) && randomNum > 0) {
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
    Button.bst.remove(num);
  }
}

export default Button;
