let Stack = require('./Stack');

//an additional stack to keep track of minimum

class StackMin extends Stack{
    constructor(){
        super();

        this._minStack = new Stack();
        this._min = null;
    }

    push(value){
        super.push(value);
        if (this._min == null || value <= this._min){
            this._min = value;
            this._minStack.push(value);
        }
    }

    pop(){
        let value = super.pop();
        if (value == this._minStack.peek()){
            this._minStack.pop();
            this._min= this._minStack.peek();
        }
        return value;
    }
    min(){
        return this._min;
    }
}

var s = new StackMin();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), null);
