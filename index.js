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