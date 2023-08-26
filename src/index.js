import Button from "./scripts/button";
import Canvas from "./scripts/canvas";
import Tutorial from "./scripts/tutorial";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => new Button(button));

  const nav = document.getElementById("open-tutorial");
  new Tutorial(nav);

  const canvas = document.querySelector(".tree-visual");
  new Canvas(canvas);
});
