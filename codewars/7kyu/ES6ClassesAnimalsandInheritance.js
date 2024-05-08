class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  class shark extends Animal{
    constructor(name, age, status){
      super(name, age, 0, 'shark', status)
    }
    introduce(){
      return `${super.introduce()} I am a ${this.species} and I am ${this.status}.`
    }
  } class cats extends Animal{
    constructor(name, age, status){
      super(name, age, 4, 'cat', status)
    }
    introduce(){
      return `${super.introduce()} I am a ${this.species} and I am ${this.status}.  Meow meow!`
    }
  }
  class Dogs extends Animal{
    constructor(name, age, status, master){
      super(name, age, 4, 'dog', status)
    }
    greetMaster(){
      return ("Hello, shifu")
    }

    introduce(){
      return `${super.introduce()} I am a ${this.species} and I am ${this.status}.  ${this.greetMaster()} is my master Bark bark!`
    }
  }
  let callCat = new cats('charite', 5, 'need milk')
  console.log(callCat.introduce())
  let callshark = new shark('charite', 5, 'hungry')
  console.log(callshark.introduce());
  let calldog= new Dogs('charite', 5, 'harsh', 'charite')
  console.log(calldog.introduce())