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

  update() {
    let offSet = Math.sqrt(20 ** 2 / 2);

    if (this.parentVal > this.childVal) {
      this.context.beginPath();
      this.context.strokeStyle = "red";
      this.context.lineWidth = "3";
      this.context.moveTo(this.xstart - offSet, this.ystart + offSet);
      this.context.lineTo(this.xend + offSet, this.yend - offSet);
      this.context.stroke();
      this.context.closePath();
    } else {
      this.context.beginPath();
      this.context.strokeStyle = "red";
      this.context.lineWidth = "3";
      this.context.moveTo(this.xstart + offSet, this.ystart + offSet);
      this.context.lineTo(this.xend - offSet, this.yend - offSet);
      this.context.stroke();
      this.context.closePath();
    }
  }
}

export default Arrow;
