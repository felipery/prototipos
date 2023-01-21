function auto() {
  this.speed = 0;
}
auto.prototype.accelerate = function (increment = 1) {
  this.speed = this.speed + increment;
};
auto.prototype.brake = function (decrement = 1) {
  if (this.speed - decrement >= 0) {
    this.speed = this.speed - decrement;
  } else {
    this.speed = 0;
    console.log(`The car is stopped`);
  }
};
auto.prototype.actualSpeed = function () {
  console.log(`Actual car speed is: ${this.speed}`);
};
const car = new auto();
console.log(`Initial car speed is: ${car.speed}`);
car.accelerate(1);
car.accelerate(2);
car.actualSpeed();
car.brake(2);
car.actualSpeed();
car.brake(3);
car.actualSpeed();
