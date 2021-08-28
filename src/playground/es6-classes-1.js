// setup constructor to take age and name
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return ` Hi! I am ${this.name} !`;
  }
  getDescription() {
    return ` Hi! I am ${this.name} and I am ${this.age} years old!. `;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      return (description += `Their major is ${this.major}`);
    }
    return `${description}`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  locator() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.locator) {
      return (greeting += ` I am visiting from ${this.homeLocation}`);
    }
  }
}

const travelerOne = new Traveler('John', 28, 'Berlin');
console.log(travelerOne.getGreeting());

// const me = new Person('Andrew', 26);
// console.log(me);
// console.log(me.getDescription());

// const detailed = new Student('Syed', 27, 'CS');
// console.log(detailed.getDescription());

// const other = new Student();
// console.log(other.getDescription());
