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
        this.checkInput(initialArray);

        this._root = this.buildTree(initialArray);
    }

    buildTree(initialArray) {

        let midIndex = Math.floor(initialArray.length / 2);

        let root = new Node(initialArray[midIndex]);

        console.log(root);

        this._root = root;
    }

    checkInput(initialArray) {
        if (!(initialArray instanceof Array)) {
            throw new TypeError('Array required');
        }

        initialArray.forEach(item => {
            if (!Number.isInteger(item)) {
                throw new TypeError('Array elements must be integers');
            }
        });

        for (let i = 0; i < initialArray.length; i++) {
            if (i === 0) {
                continue;
            }

            if (initialArray[i] < initialArray[i - 1]) {
                throw new RangeError('Array must be sorted smallest to largest');
            }
        }

        return true;
    }
}

//var tree1 = new Tree(1);
//var tree2 = new Tree([1, 2, 3, 't']);
//var tree3 = new Tree([1, 2, 4, 3]);
var tree4 = new Tree([1, 2, 3, 4]);