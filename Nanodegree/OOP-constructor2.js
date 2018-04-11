function Finch(name) {
  this.kingdom = 'Animalia';
  this.name = name;
}

function Sparrow(name) {
  this.kingdom = 'Animalia';
  this.name = name;
}

// Let's create an instance of each constructor:

const atticus = new Finch('Atticus');
const jack = new Sparrow('Jack');

// What is the result when atticus instanceof Sparrow; is executed?



// False
