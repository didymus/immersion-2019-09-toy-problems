/*
  * Basic tree that stores a value.
*/

var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  // make new tree instance
  // does callback call on base tree node value
  let node = Array.from(arguments)[1] || new Tree(callback(this.value));
  // loop over children array
  this.children.forEach((tree, i) => {
    // call addChild on new tree
    node.addChild(callback(tree.value));
    // if new tree's children has length
    if (tree.children.length) {
      // use map on new tree instance to add nodes...
      // ...to all children throughout new tree
      tree.map(callback, node.children[i]);
    }
  });
  // return new tree
  return node;
};


Tree.prototype.mapInPlace = function (callback) {
  // base case
  // update node value with callback result
  this.value = callback(this.value);
  // loop through children
  for (let i = 0; i < this.children.length; i++) {
    //call mapInPlace recursively on children
    this.children[i].mapInPlace(callback);
  }
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
