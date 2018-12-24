var numbers = [1,2,3,4,5];
console.log(`numbers = ${numbers}`);
console.log("Type of numbers is: "+typeof(numbers));

for(var index=0;index<numbers.length;index++)
    console.log(`value = ${numbers[index]}`);

//arrary of strings
var names = ["Babu", "Fodo", "Pepet", "Choku", "Bopinder"];
console.log("Data type of names: "+typeof(names));
for(var i=0;i<names.length;i++)
    console.log(`name: ${names[i]}`);

//mixed elements

var mixed = [1, true, "Person", 4.5];
for (var i=0;i<mixed.length;i++)
    console.log(`variable: ${mixed[i]} and datatype: ${typeof(mixed[i])}`);


//array of objects
var people=[
    {"name":"person1", "add":"add1"},
    {"name":"person2", "add":"add2"},
    {"name":"person3", "add":"add3"},
];

console.log(`first person name: ${people[0].name}`);
console.log(`second add: ${people[1].add}`);
console.log(`third person name: ${people[2].name}`);