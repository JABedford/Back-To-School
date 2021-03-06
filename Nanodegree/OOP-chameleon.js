/*

OBJECT ORIENTATED JAVASCRIPT

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/


const chameleon = {
  color: "green",
  changeColor: function () {
      if (this.color === "green"){
         chameleon.color = "pink";
      } else {
          chameleon.color = "green";
      }
    }
};

chameleon.changeColor();
console.log(chameleon.color);
