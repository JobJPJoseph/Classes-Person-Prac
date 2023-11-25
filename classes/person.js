// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    return console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static isNotArray(input) {
    if (Array.isArray(input)) {
      return true;
    } else {
      throw new Error(`introducePeople only takes an array as an argument.`);
    }
  }

  static isNotObject(input) {
    if (input instanceof Person) {
      return true;
    } else {
      throw new Error(`All items in array must be Person class instances.`);
    }
  }

  static introducePeople(people) {
    this.isNotArray(people);

    for (let i = 0; i < people.length; i++) {
      const person = people[i];

      if (this.isNotObject(person)) person.introduce();
    }

  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
