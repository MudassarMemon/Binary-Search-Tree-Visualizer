import Button from "./scripts/button";
import Slide from "./scripts/slide";
import Code from "./scripts/code";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementsByTagName("button");
  for (let i = 0; i < button.length; i++) {
    new Button(button[i]);
  }

  const slides = document.getElementsByClassName("slide");
  new Slide(slides);

  const codeSlides = document.getElementsByClassName("codeslide");
  new Code(codeSlides);

  const canvas = document.getElementById("canvas");
  canvas.width = 1800;
  canvas.height = 700;
  canvas.style.background = "linear-gradient(skyblue, lightgreen)";

  const pressGenerate = document.querySelector("button#generate-random");
  let bst = new Button(pressGenerate);
  bst.generate();

  //   unbalanced bst
  //   uniqueNums.sort((a, b) => a - b);
});
