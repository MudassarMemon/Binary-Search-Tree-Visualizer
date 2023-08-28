class Arrow {
  constructor(context, parent, child) {
    this.parentVal = parent.value;
    this.xstart = parent.xpos;
    this.ystart = parent.ypos * (1 + parent.level);

    this.childVal = child.value;
    this.xend = child.xpos;
    this.yend = child.ypos * (1 + child.level);
    this.context = context;
    this.drawLine();
  }

  drawLine() {
    let offSet = Math.sqrt(20 ** 2 / 2);

    if (this.parentVal > this.childVal) {
      this.context.beginPath();
      this.context.moveTo(this.xstart - offSet, this.ystart + offSet);
      this.context.lineTo(this.xend + offSet, this.yend - offSet);
      this.context.stroke();
      this.context.closePath();
    } else {
      this.context.beginPath();
      this.context.moveTo(this.xstart + offSet, this.ystart + offSet);
      this.context.lineTo(this.xend - offSet, this.yend - offSet);
      this.context.stroke();
      this.context.closePath();
    }
  }

  update(color = "red", thickness = "3") {
    //offset the line and circle intersection point to be at the 45 deg, 135 deg, 225 deg or 315 deg depending on whether linking left or right child nodes
    let offSet = Math.sqrt(20 ** 2 / 2);

    if (this.parentVal > this.childVal) {
      this.context.beginPath();
      this.context.strokeStyle = color;
      this.context.lineWidth = thickness;
      this.context.moveTo(this.xstart - offSet, this.ystart + offSet);
      this.context.lineTo(this.xend + offSet, this.yend - offSet);
      this.context.stroke();
      this.context.closePath();
    } else {
      this.context.beginPath();
      this.context.strokeStyle = color;
      this.context.lineWidth = thickness;
      this.context.moveTo(this.xstart + offSet, this.ystart + offSet);
      this.context.lineTo(this.xend - offSet, this.yend - offSet);
      this.context.stroke();
      this.context.closePath();
    }
  }
}

export default Arrow;
