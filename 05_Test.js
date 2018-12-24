//alias of a function

function function1(){
    console.log("Inside function1");
}
function1();

//we can pass anything
function function2(p1)
{
    console.log("Inside function2");
    console.log(`function parameter ${p1}`);
    
}

var myfunction1=function1;
myfunction1();

var myfunction2=function2;
myfunction2(22);

//arrow function
var myfunction4= () => {
    console.log(`inside function 4`);
}

myfunction4();

var myfunction5= (p2,p3) => {
    console.log(`inside function 4 with addition ${p2} with ${p3}`);
}

myfunction5(2,3);