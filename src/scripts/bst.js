import Circle from "./circle";
import Arrow from "./arrow";

class Node {
  constructor(value) {
    this.value = value;
    this.level = 0;
    this.xpos = 750;
    this.ypos = 75; //more accurately refers to y spacing between canvas circles - refer to circle constructor
    this.left = null;
    this.right = null;
    this.circle = null;
    this.arrow = null;
  }
}

class BinarySearchTree {
  //creates new binary tree instance
  constructor() {
    this.root = null;
    this.circles = [];
    this.nodeList = [];
  }

  //inserts new nodes with the input values
  insert(value) {
    //declare variables to be used in insert func
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const newNode = new Node(value);

    //if no root exists, inserts node as root of new bst
    if (!this.root) {
      newNode.level = 0;
      newNode.circle = new Circle(context, newNode);
      this.root = newNode;
      this.nodeList.push(newNode);
      this.circles.push({ circle: newNode.circle, value: newNode.value });
      return;
    }

    //traverses beginning at root to find insertion point
    let current = this.root;

    while (true) {
      //avoid duplicates
      if (value === current.value) {
        console.log("This value already exists!");
        return undefined;
      }

      //increments nodes level at bst as it is traversed deeper
      newNode.level += 1;

      //traverse left side of bst if true
      if (value < current.value) {
        //updates nodes x pos to be left of default root xpos
        //this is proportional to the node level to prevent overlaps on canvas
        newNode.xpos -= 300 / newNode.level;

        //if current node does not have left child, new node set as current nodes left child
        if (!current.left) {
          current.left = newNode;
          newNode.circle = new Circle(context, newNode);
          newNode.arrow = new Arrow(context, current, current.left);
          this.nodeList.push(newNode);
          this.circles.push({
            circle: newNode.circle,
            arrow: newNode.arrow,
            value: newNode.value,
          });
          //node inserted. return out of while loop
          return;
        } else {
          //loop the while block with new current node
          current = current.left;
        }
      } else {
        //updates nodes x pos to be right of default root xpos
        //this is proportional to the node level to prevent overlaps on canvas
        newNode.xpos += 300 / newNode.level;

        //if current node does not have right child, new node set as current nodes left child
        if (!current.right) {
          current.right = newNode;
          newNode.circle = new Circle(context, newNode);
          newNode.arrow = new Arrow(context, current, current.right);
          this.nodeList.push(newNode);
          this.circles.push({
            circle: newNode.circle,
            arrow: newNode.arrow,
            value: newNode.value,
          });
          //node inserted. return out of while loop
          return;
        } else {
          //loop the while block with new current node
          current = current.right;
        }
      }
    }
  }

  async remove(value) {
    //declaring variables to be used in remove func
    let current = this.root;
    let previous = null;
    let minChild = null; //child to replace removed node
    let indexToRemove = null; //circles array index of child to replace removed node
    const canvas = document.getElementById("canvas"); //might not need
    const context = canvas.getContext("2d"); //might not need

    //traverse BST to search value to remove
    while (true) {
      //found value to remove
      if (current.value === value) {
        //traverse BST to find node to replace removed node
        if (current.right) {
          minChild = current.right;
          while (minChild.left) {
            minChild = minChild.left;
          }
        } else if (current.left) {
          //node to remove has no right child, replacing with left child
          minChild = current.left;
        } else {
          //node to remove has no children - it is a leaf node - no operations required
        }

        //making connections to remaining nodes so none are inadvertently orphaned
        if (previous) {
          if (current === previous.right) {
            previous.right = current.right;
          } else if (current.right) {
            previous.left = current.right;
          } else {
            previous.left = null;
          }
        }

        //updating canvas circles array accordingly
        this.circles.forEach((circle, i) => {
          if (!minChild) {
            if (circle["circle"].value === value) {
              indexToRemove = i;
            }
          } else {
            if (circle["circle"].value === value) {
              //remove unnecessary value attribute?
              current.value = minChild.value;
              circle["value"] = minChild.value;
              circle["circle"].value = minChild.value;
            } else if (circle["circle"].value === minChild.value) {
              indexToRemove = i;
            }
          }
        });

        //update canvas
        this.circles.splice(indexToRemove, 1);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await this.reset();

        //update connections between nodes after removal
        await new Promise((resolve) => setTimeout(resolve, 5000));
        context.clearRect(0, 0, 1500, 700);
        this.nodeList.splice(indexToRemove, 1);
        console.log(this.nodeList);
        this.root = null;
        this.nodeList.forEach((node) => {
          this.insert(node.value);
        });

        return;
      } else if (current.value < value) {
        //traverse right side of bst
        previous = current;
        current = current.right;
      } else {
        //traverse left side of bst
        previous = current;
        current = current.left;
      }
    }
  }

  //searches bst for target value
  async search(value) {
    //declaring variables to use in search func
    let current = this.root;

    //traverse bst starting from root node
    while (current) {
      //highlighting arrows begin traverse
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (current.arrow) {
        current.arrow.update();
      }

      //highlighting nodes being traversed
      await new Promise((resolve) => setTimeout(resolve, 1000));
      current.circle.update();

      //comparison to evaluate if target found
      if (current.value === value) {
        //highlighting found target node
        await new Promise((resolve) => setTimeout(resolve, 1000));
        current.circle.found();

        //clearing the highlighted traversal path after 5s
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await this.reset();

        //return true if target found
        return true;
      } else if (current.value > value) {
        //traverse left side of bst
        current = current.left;
      } else if (current.value < value) {
        //traverse right side of bst
        current = current.right;
      }
    }

    //return false if target not found in bst
    return false;
  }

  //resets the canvas elements
  reset() {
    //clear canvas
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, 1500, 700);

    //add circles to canvas
    this.circles.forEach((circle) => {
      circle["circle"].drawNode();
      if (circle["arrow"]) {
        circle["arrow"].drawLine();
      }
    });
  }
}

export { Arrow, Circle, Node, BinarySearchTree };