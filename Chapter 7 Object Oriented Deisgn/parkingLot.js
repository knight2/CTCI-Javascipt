// Design a parking lot using object-oriented principles.

let ParkingLot = function(spaces){
    this.limit = spaces;
    this.number = 0;
    this.cars = {};
};

ParkingLot.prototype.park =function(car){
    if (this.number <= this.limit){
        if (this.cars[car.name] !== undefined){
            console.log('car is already inside lot');
        } else{
            this.cars[car.name] = car;
            this.numbers++;
        }
    } else{
        console.log('this parking lot is full');
    }
};

ParkingLot.prototype.exit = function(car){
    if (this.number === 0){
        console.log('no cars in lot');
    } else if (this.cars[car.name] === undefined){
        console.log('the car is not in the lot');
    } else{
        delete this.cars[car.name];
        this.number--;
    }
};

ParkingLot.prototype.available = function(){
    return this.number < this.limit;
};

