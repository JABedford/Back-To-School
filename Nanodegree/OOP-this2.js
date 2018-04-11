// Consider the following object, building:

const building = {
  floors: 5,
  addFloor: function () {
    this.floors += 1;
  }
};

building.addFloor();
// ???

// What is the value of this when building.addFloor(); is executed?

// Building
