import Button from "./scripts/button";
import Slide from "./scripts/slide";
import { Arrow, Circle, Node, BinarySearchTree } from "./scripts/bst";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementsByTagName("button");
  for (let i = 0; i < button.length; i++) {
    new Button(button[i]);
  }

  const slides = document.getElementsByClassName("slide");
  new Slide(slides);

  const canvas = document.getElementById("canvas");
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  canvas.width = windowWidth - 100;
  canvas.height = windowHeight;
  canvas.style.background = "linear-gradient(skyblue, lightgreen)";

  const pressGenerate = document.querySelector("button#generate-random");
  let bst = new Button(pressGenerate);
  bst.generate();

  //   unbalanced bst
  //   uniqueNums.sort((a, b) => a - b);
});
