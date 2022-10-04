console.log('We are listening from tut 20');

// Classes in JS
// Before ES6 version, using constructor functions
function Student(name,rollNumber,grade,section){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }
  
  // Way to add methods to a constructor function
  Student.prototype.getDetails = function(){
    return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}';
  }
  
  
  let student1 = new Student("Vivek", 354, "6th", "A");
  student1.getDetails();
  // Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A
  
  // ES6 version classes
  class Studento{
    constructor(name,rollNumber,grade,section){
      this.name = name;
      this.rollNumber = rollNumber;
      this.grade = grade;
      this.section = section;
    }
  
    // Methods can be directly added inside the class
    getDetails(){
      return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}';
    }
  }
  
  let student2 = new Studento("Garry", 673, "7th", "C");
  student2.getDetails();
  // Returns Name: Garry, Roll no:673, Grade: 7th, Section:C


