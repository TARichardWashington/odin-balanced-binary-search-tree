class Node {
    constructor(data, leftNode = null, rightNode = null) {
        this._leftNode = leftNode;
        this._rightNode = rightNode;
        this._data = data;
    }

    get leftNode() {
        return this._leftNode;
    }

    set leftNode(leftNode) {
        this._leftNode = leftNode;
    }

    get rightNode() {
        return this._rightNode;
    }

    set rightNode(rightNode) {
        this._rightNode = rightNode;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }
}

var child1 = new Node(75);
var child2 = new Node(100);
var parent = new Node(85, child1, child2);

console.log(parent.leftNode.data);
console.log(parent.rightNode.data);

class Tree {
    constructor(initialArray) {
        if (!(initialArray instanceof Array)) {
            throw new TypeError('Array required');
        }

        initialArray.forEach(item => {
            if (!Number.isInteger(item)) {
                throw new TypeError('Array elements must be integers');
            }
        })
    }
}

//var tree1 = new Tree(1);
//var tree2 = new Tree([1, 2, 3, 't']);
var tree3 = new Tree([1, 2, 3, 4]);