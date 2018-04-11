// Consider the following constructor function, City:

function City(name, population) {
  this.name = name;
  this.population = population;

  this.identify = function () {
    console.log(`${this.name}'s population is ${this.population}.`);
  };
}

// The following is executed:

const sanFrancisco = new City('San Francisco', 870000);

// What is the value of this?

// The newly created object
