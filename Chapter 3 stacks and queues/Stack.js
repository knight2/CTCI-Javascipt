//Implementation of a stack
//using an array
// Push(value)
// pop()
// peek()
// is empty
//size

class Stack {
    constructor(){
        this._data = [];
    }

    size(){
        return this._data.length;
    }

    isEmpty(){
        return this.size() == 0;
    }

    push(value){
        this._data.push(value);
    }

    pop(){
        return this._data.pop();
    }

    peek(){
        if (this.isEmpty()) return null;
        return this._data[this.size() -1];
    }

    toArray(){
        return this._data;
    }
}

module.exports = Stack;