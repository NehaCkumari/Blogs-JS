class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return this.year + ' ' + this.make + ' ' + this.model;
  }
}

var car = new Car('Toyota', 'Camry', 2020);
console.log(car.getDetails()); // Output: 2020 Toyota Camry