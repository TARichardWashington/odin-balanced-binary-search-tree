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

class Tree {
    constructor(initialArray) {
        this.checkInput(initialArray);
        this._root = this.buildTree(initialArray);
    }

    buildTree(initialArray) {

        if (initialArray.length === 0) {
            return null;
        }

        let midElement = Math.floor(initialArray.length / 2);
        let newRoot = new Node(initialArray[midElement]);
        newRoot.leftNode = this.buildTree(initialArray.slice(0, midElement));
        newRoot.rightNode = this.buildTree(initialArray.slice(midElement + 1));

        return newRoot;
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

    prettyPrint(node = null, prefix = '', isLeft = true) {
        if (node === null) {
            node = this._root;
        }

        if (node !== null) {

            if (node.rightNode !== null) {
                this.prettyPrint(node.rightNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
            }
            console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
            if (node.leftNode !== null) {
                this.prettyPrint(node.leftNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
            }
        } else {
            console.log('│');
        }
    }

    insert(value, node = null) {
        // TODO: Check for duplicates!

        if (this._root === null) {
            console.log('setting root');
            this._root = new Node(value);
            return this;
        }

        if (node === null) {
            node = this._root;
        }

        let inserted = false;

        while (!inserted) {
            if (value < node.data) {
                if (node.leftNode === null) {
                    node.leftNode = new Node(value);
                    inserted = true;
                } else {
                    node = node.leftNode;
                }
            } else {
                if (node.rightNode === null) {
                    node.rightNode = new Node(value);
                    inserted = true;
                } else {
                    node = node.rightNode;
                }
            }
        }
    }
}

//var tree1 = new Tree(1);
//var tree2 = new Tree([1, 2, 3, 't']);
var tree4 = new Tree([1, 2, 3, 4]);
//4ar tree4 = new Tree([]);
tree4.prettyPrint();
tree4.insert(7);
tree4.insert(1000);
tree4.insert(17);
tree4.insert(108);
tree4.insert(16);
tree4.insert(11);
tree4.insert(26);
tree4.prettyPrint();