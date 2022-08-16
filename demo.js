'use strict'; 
// (function() {

//   //object literal
//   let person = {
//     firstName: 'David',
//     lastName: 'Cook',
//     age: 27,
//     isAdult() {return this.age >= 18}
//   };

//   // adding data to an object
//   //person.age = 27;

//   //Method example
//   //person.isAdult = function() {return this.age >= 18;}

//   display(person.firstName)
//   display(person.age)
//   display(person.isAdult())


// })();

//way to create a function that makes an object
// (function() {

//   function registerUser(fname, lname) {
//     let person = {
//       firstName: fname,
//       lastName: lname
//     };
//     display(person);
//   }

//   registerUser('David', 'Cook')
// })()

//One way to make an object with shorthand syntax. Make the parameters match the keys in the object.
// (function() {

//     function registerUser(firstName, lastName) {
//       let person = {
//         firstName,
//         lastName,
//         age: 27,
//         isAdult() {return this.age >= 18}
//       };

//       //Way to copy an object to another. 
//       let registerUser2 = { };
//       Object.assign(registerUser2, person);
//       display(registerUser2);
//     }
  
//     registerUser('David', 'Cook')
//   })()

  // (function() {

  //   function registerUser(firstName, lastName) {
  //     let person = {
  //       firstName,
  //       lastName,
  //       age: 27,
  //       isAdult() {return this.age >= 18}
  //     };

  //     //Way to copy an object to another when it has existing data you want to add to it. 
  //     let healthStats = {
  //       weight: 150,
  //       height: 180
  //      };
  //     Object.assign(healthStats, person);
  //     display(healthStats);
  //   }
  
  //   registerUser('David', 'Cook')
  // })()
  
//Constructor Function
// (function() {
//   function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.isAdult = function() {return this.age >=18; }
//   }

//   let dave = new Person('Dave', 'Cook', 27);
//   let nolan = new Person('Nolan', "Cook", 4);

//   display(dave);
//   display(nolan);
// })();


//A function prototype is the object instance that will become the prototype for all objects created using this function as a constructor.
//An object prototype is the object instance from which the object is inherited.


// -- Classes --

// (function() {

//   class Person {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }
//     //adding getters and setters 
//     get fullName() {
//       return this.firstName + ' ' + this.lastName
//     }

//     set fullName(fullName) {
//       let nameParts = fullName.split(' ');
//       this.firstName = nameParts[0];
//       this.lastName = nameParts[1];
//     }
//     //adding functions to a class
//     isAdult() {
//       return this.age >= 18;
//     }
//   }

//   let david = new Person('David', 'Cook', 27);
//   //david.fullName = 'Parker Ericson'

//   //display(david.fullName)
//   //display(david.isAdult())
//   display(david)
// })();

