//function

function function1(){
    console.log("Inside function1");
}
function1();

//we can pass anything
function function2(p1)
{
    console.log("Inside function2");
    console.log(`p1 = ${p1}, type of p1 = ${typeof(p1)}`);
}


function2("hello");

function add(p1,p2){
    console.log(`Inside add`);
    console.log(`Addition is: ${(p1+p2)}`);
}

add(1,2);

// return type function
function multiply(p1,p2)
{
    console.log(`Multiplication of ${p1} and ${p2} is`);
    return (p1*p2);
}

var num = multiply(2,3);{
console.log(`${num}`);
}

// parse
var number = parseInt("40.40");
// parseFloat
console.log(`number: ${number}, datatype is ${typeof(number)}`);

var num3 = parseInt("40test")
console.log(`number = ${num3}, type of num3 = ${typeof(num3)}`);

var num4 = parseInt("40test40")
console.log(`number = ${num4}, type of num4 = ${typeof(num4)}`);

var num5 = parseInt("test40")
console.log(`number = ${num5}, type of num5 = ${typeof(num5)}`);

console.log(`addition = ${40 + 50 + "60"}`);

console.log(`addition = ${40 + 50 + "60" + "70" + 10 + 20}`);

var ch = 'a';
console.log(`ch = ${ch}, type of ch = ${typeof(ch)}, ascii code = ${ch.charCodeAt(0)}`);