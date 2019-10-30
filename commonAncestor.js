/* eslint-disable no-extend-native */
var Tree = function(){
this.children = [];
this.parents = null; // add parents property
};

// add immediate child
Tree.prototype.addChild = function(child){
  // check if child is not descendant
if(!this.isDescendant(child)){
    child.parents = this;
    // if not descendant then add
    this.children.push(child);
} return this;
};

// return closest common ancestor
Tree.prototype.getClosestCommonAncestor = function(node1, node2){ // accepts 2 nodes as parameters
let current1 = node1;
while(current1 !== null){
    let current2 = node2;
    while(current2 !== null){
        if(current1 === current2){
        return current1;
        } current2 = current2.parents;
    } current1 = current1.parents;
    } return null;
};
// return ancestor path of a child
Tree.prototype.getAncestorPath = function(child){
let current = child;
let array = [child];
    while(current !== this){
    current = current.parents;
    array.unshift(current);
    if(current === null){
    return null;
    }
} return array;
};

// check if already child of tree or sub-trees
Tree.prototype.isDescendant = function(child){
if(this.children.indexOf(child) !== -1){
    // immediate `child` of this tree
    return true;
} else {
    for(let i = 0; i < this.children.length; i++){
    if(this.children[i].isDescendant(child)){
        // `child` is descendent of tree
        return true;
    }
    } return false;
}
};

// remove immediate child
Tree.prototype.removeChild = function(child){
let index = this.children.indexOf(child);
if(index !== -1){
    // remove the child
    this.children.splice(index, 1);
}
};