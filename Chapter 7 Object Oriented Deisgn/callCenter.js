// Call Center: Imagine you have a call center with three levels of employees: respondent, manager,
// and director. An incoming telephone call must be first allocated to a respondent who is free. If the
// respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not
// free or not able to handle it, then the call should be escalated to a director. Design the classes and
// data structures for this problem. Implement a method dispatchCall() which assigns a call to
// the first available employee.

let Queue = require('./Queue');

//Employee class
let Employee = function(name){
    this.name = name;
};

Employee.prototype.dispatch = function(call, queue){
    let context = this;
    setTimeout(function(){
        queue.add(context);
        console.log(`adding ${context.name} back to queue`)
    }, call.time);
};

//Call class
let Call = function(time){
    this.time = time; //time the call will take in ms
};

//Call center class
let CallCenter = function(){
    this.respondentQ = new Queue();
    this.managerQ = new Queue();
    this.directorQ = new Queue();
    this.open = false;
    this.init = false;
};

CallCenter.prototype.start = function(){
    if (this.init){
        console.log('already intialized');
        return;
    }

    // 3 employees of each type
    for (let i = 0; i<3; i++){
        this.respondentQ.add(new Employee(`resp${i}`));
        this.managerQ.add(new Employee(`manager${i}`));
        this.directorQ.add(new Employee(`director${i}`));
      }
      this.init = true;
};

CallCenter.prototype.dispatchCall = function(call){
    let employee;
    if (!this.respondentQ.isEmpty()){
        employee = this.respondentQ.remove();
        console.log(employee ,'will be deployed');
        employee.dispatch(call, this.respondentQ);
        console.log('a respondent will be taking your call!')
    } else if (!this.managerQ.isEmpty()) {
        employee = this.managerQ.remove();
        console.log(employee, 'will be deployed');
        employee.dispatch(call, this.managerQ);
        console.log('a manager will be taking your call!');
      } else if (!this.directorQ.isEmpty()) {
        employee = this.directorQ.remove();
        console.log(employee, 'will be deployed');
        employee.dispatch(call, this.directorQ);
        console.log('a director will be taking your call!');
      } else {
        console.log('sorry, there are currently no available staff to take your call :(');
      }
    };

/* Test */

var cc = new CallCenter();
cc.start();
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(2000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(4000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(6000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
setTimeout(function() {
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
}, 1000);
