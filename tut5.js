console.log("We are listening from tut 5 files");

/**
 * Javascript Bind Method:
 * Object calling method from anothr object
 * With the bind() method, an object can borrow a method from another object.
 * 
 */

let person = {
    firstName: 'Anil',
    lastName: 'Sidhu',
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }

}

let Employee = {
    firstName: 'Abhishek',
    lastName: 'Nanda'
}
let boundName = person.fullName.bind(Employee);
console.log('Bind Method Accomplished and the full Name is ', boundName());


//Preserving This :

/**
 * Sometimes the bind() method has to be used to prevent loosing this.
 * In the following example, the person object has a display method.
 * In the display method, this refers to the person object:
 
*/

const man = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  console.log(man.display());

/**
 * When a function is used as a callback, this is lost.
 * This example will try to display the person name after 3 seconds, 
 * but it will display undefined instead:
 * 
 */

 const bachha = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  
  setTimeout(bachha.display, 3000);

/**
 * The bind() method solves this problem.
 * In the following example, the bind() method is used to bind woman.display to person.
 * This example will display the woman name after 3 seconds:
 */

 const woman = {
    firstName:"Zra",
    lastName: "Hana",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  
  let display = woman.display.bind(woman);
  setTimeout(display, 3000);



