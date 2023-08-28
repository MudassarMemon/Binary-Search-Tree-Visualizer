class Circle {
  constructor(context, node) {
    this.context = context;
    this.level = node.level;
    this.xpos = node.xpos;
    this.ypos = node.ypos * (1 + node.level); //updates based on level
    this.value = node.value;
    this.drawNode();
  }

  drawNode() {
    this.context.beginPath();
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.font = "20px Arial";
    this.context.fillText(this.value, this.xpos, this.ypos);
    this.context.strokeStyle = "blue";
    this.context.lineWidth = 2;
    this.context.arc(this.xpos, this.ypos, 20, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
  }

  update(color = "red", thickness = "3") {
    this.context.beginPath();
    this.context.strokeStyle = color;
    this.context.lineWidth = thickness;
    this.context.arc(this.xpos, this.ypos, 22, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
  }

  found() {
    this.context.beginPath();
    this.context.strokeStyle = "green";
    this.context.lineWidth = 15;
    this.context.arc(this.xpos, this.ypos, 30, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
  }
}
export default Circle;
