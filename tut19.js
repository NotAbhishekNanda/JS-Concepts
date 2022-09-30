console.log("Listening from 19th file");

// Call-Apply-Bind Method:
let name ={
    firstName: "Abhishek",
    lastName: "Nanda"
}

let printFullName = function(hometown,state){
    console.log(this.firstName + " " + this.lastName + "from" + hometown + "," + state);
}

printFullName.call(name, "Bhubaneswar", "Odisha");

let name2 = {
    firstName: "Mahendra Singh",
    lastName: "Dhoni"
}

// function borrowing
printFullName.call(name2, "Ranchi", "Jharkhand");

// Apply function
// It takes the function arguments(other tah object reference) as an array.
printFullName.apply(name2, ["Ranchi","Jharkhand"]);

// bind method
// This method copies the function exactly. makes a shallow copy and can be invoked later
let printMyName = printFullName.bind(name2, "Ranchi" ,"Jharkhand");
console.log(printMyName);
printMyName();
