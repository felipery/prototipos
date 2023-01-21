function Person(_name, weigth, heigth) {
  (this._name = _name), (this.weigth = weigth), (this.heigth = heigth);
}
Person.prototype = {
  sayHello(otherName) {
    console.log(`Hello ${otherName}, my name is ${this._name}`);
  },
  BMI() {
    const bmi = this.weigth / Math.pow(this.heigth, 2);
    console.log(bmi);
  },
};
const felipe = new Person('Felipe', 80, 175);
felipe.sayHello('Andrea');
felipe.BMI();
