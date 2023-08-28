import Button from "./scripts/button";
import Slide from "./scripts/slide";
import { Arrow, Circle, Node, BinarySearchTree } from "./scripts/bst";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementsByTagName("button");
  for (let i = 0; i < button.length; i++) {
    new Button(button[i]);
  }

  const slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    new Slide(slides[i], i, slides);
  }

  const canvas = document.getElementById("canvas");
  canvas.width = 1500;
  canvas.height = 700;
  canvas.style.background = "yellow";

  //generate random BST
  const uniqueNums = [51, 62, 9];

  while (uniqueNums.length < 10) {
    let randomNum = Math.floor(Math.random() * 100);
    if (!uniqueNums.includes(randomNum) && randomNum > 0) {
      uniqueNums.push(randomNum);
    }
  }

  // uniqueNums.push(62);

  //   unbalanced bst
  //   uniqueNums.sort((a, b) => a - b);

  let bst = new BinarySearchTree();

  uniqueNums.forEach((num) => bst.insert(num));

  // test bst insertion
  bst.insert(67);
  bst.insert(55);
  bst.insert(64);
  bst.insert(66);

  // test bst deletion
  bst.remove(9);
  bst.remove(55);

  // test bst search
  // bst.search(62);

  // testing the update methods for circles and arrows for search BST method
  // bst.circles.forEach((circle) => {
  //   circle["circle"].update();
  //   if (circle["arrow"]) {
  //     circle["arrow"].update();
  //   }
  // });

  // reset canvas
  // bst.circles.forEach((circle) => {
  //   circle["circle"].reset();
  // });
});
