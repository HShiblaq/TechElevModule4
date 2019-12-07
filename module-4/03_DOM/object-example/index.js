//console.log("Hello");
let john = {name: "John", position: "instructor",
lengthOfService: 3}
let brian = {name: "Brian", position: "instructor",
lengthOfService: 2}

let instructors = [john,brian];


//console.log(instructors);

//console.log(instructors[1].name);
//console.log(instructors[1]["name"]);


let instObject = new Object;

instObject.senior = john;
instObject.junior = brian;

//console.log(instObject);

//console.log(instObject.junior);
//console.log(instObject.junior.name);

console.log(instObject["junior"]["name"]);
