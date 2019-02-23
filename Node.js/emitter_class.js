var event = require("events");
//emitter class
class myEvent extends event {}
//creating object of clas myEvent
var myEventObject = new myEvent();
// object of emitter class exposes 'on' method to attach
//listeners to named event.
// attaching listener function to 'namedEvent'
myEventObject.on("namedEvent",function(){
    console.log("Called namedEvent in myEventObject's attached listener");
});

myEventObject.emit("namedEvent");
