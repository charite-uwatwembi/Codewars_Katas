// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
// Task
// Define the following classes.

// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

// II. Cube
// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

class Cuboid {
    // TODO: Program Me
    constructor(length, width, height){
        this.length = length
        this.width = width
        this.height = height
    }
    get surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    get volume(){
      return this.length * this.width * this.height
    }
  }
  class Cube extends Cuboid {
    // Don't forget to make a call to super ;)
    constructor(length){
        super(length, length, length)

    }
  }

  let cuboid = new Cuboid(2, 3, 4)
  console.log(cuboid.surfaceArea)
  console.log(cuboid.volume)

  let cube = new Cube(2)
  console.log(cube.surfaceArea)
  console.log(cube.volume)