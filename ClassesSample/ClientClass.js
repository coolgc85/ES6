class Person{
    constructor(name, age, sex, address, adult) {
       this._name = name;
       this._age = age;
       this._sex = sex;
       this._address = address;
       this.adult = adult;
    }

    isAnAdult(){
      this.adult = this._age>18?true:false;
   }

   get name(){
       return this._name;
   }

   set name(newName){
    this._name = newName;
}
    
}

class Employee extends Person{
    constructor(employeeId, rolePosition,...personInfo){
        //parent class constructor must be called first in order to use this reference
        super(); 
        this.employeeId = employeeId;
        this.rolePosition = rolePosition;
        
    }
}

const personOneDetails = ["Galo",36,"M","123-FL"]
let personOne = new Person(...personOneDetails);
console.log(personOne);
//Invoking getter
console.log(personOne.name);

//No getter, we get an Undefined
console.log(personOne.age);

//invoke a method and change field value
personOne.isAnAdult();

//Read public field
console.log(personOne.adult);

//We use spread syntax for reuse person information
const employeeDetail = [12,"Developer",...personOneDetails]
console.log(employeeDetail);
const employeeOne = new Employee(...employeeDetail);
//accesing to public field, but this time the object is an Employee type
console.log(employeeOne.rolePosition);
