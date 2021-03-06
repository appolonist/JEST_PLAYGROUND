class Profiler {
    constructor (label) {
      this.label = label
      this.lastTime = null
    }
  
    start () {
      this.lastTime = process.hrtime()
    }
  
    end () {
      const diff = process.hrtime(this.lastTime)
      console.log(`Timer "${this.label}" took ${diff[0]} seconds ` +
        `and ${diff[1]} nanoseconds.`)
    }
  }
  
  const noopProfiler = {
    start () {},
    end () {}
  }
  
  export function createProfiler (label) {
    if (process.env.NODE_ENV === 'production') {
      return noopProfiler
    }
  
    return new Profiler(label)
  }
  /*

function Car(name, type) {

  this.name = name;
  this.type = type;

}

function Truck(name, type) {

  this.name = name;
  this.type = type;

}

function VehiclesFactoryMethod() {

  this.create = function(name, type) {
      switch(type) {
         case "Car":
           return new Car(name, type);
         case "Truck":
           return new Truck(name, type);
         default;
      }
  }

}

// Let's instantiate our factory method object.
const VehiclesFactoryMethod = new VehiclesFactoryMethod();

// This array will simulate our Database for the purposes of this tutorial
const vehicles = [];

// Let's fill our array with some vehicles!
vehicles.push(VehiclesFactoryMethod.create("BMW", "Car"));
vehicles.push(VehiclesFactoryMethod.create("MAN", "Truck"));

// This function will output the inserted vehicles in a more stylized context 
function print() {
   console.log("Database of our vehicles : ");
   console.log("Name: " + this.name);
   console.log("Type: " + this.type);
}

// Let's loop through our array of vehicles 
// And call **showVehicles*** method to print them out.
vehicles.forEach( vehicle => {
   print.call(vehicle);
});


  
const makeVehicle = (name, type) => ({name, type}); //duck object creation
const makeCar = (name) => makeVehicle(name, 'car');
const makeTruck = (name) => makeVehicle(name, 'truck');

// end even more concise by point free
const makeVehicle = (type) => (name) => ({name, type});
const makeCar = makeVehicle('car');
const makeTruck = makeVehicle('truck');


  
  
  */