"use strict";
console.log('hi there!');
function applyDiscount(product, discount) {
    product.cost = product.cost * ((100 - discount) / 100);
}
const tp = {
    id: 100,
    name: 'Pen',
    cost: 10,
    category: 'stationary',
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
};
function add(...args) {
    return 0;
}
add(10, 20);
add(10);
add();
add(10, "20");
add([10, 20], [20, 30]);
add([10, 20], [20, "30"]);
/* class Employee {
    private _id : number = 0;
    public name : string = '';
    public salary : number = 0;

    public get id() {
        console.log('getter-id triggered');
        return this._id;
    }
    private set id(val) {
        console.log('setter-id triggered');
        this._id = val;
    }
    constructor(id : number, name : string, salary : number) {
        this._id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        return `id = ${this._id}, name=${this.name}, cost = ${this.salary}`
    }
} */
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        return `id = ${this.id}, name=${this.name}, cost = ${this.salary}`;
    }
}
let emp = new Employee(100, 'Magesh', 10000);
console.log(emp.display());
class FulltimeEmployee extends Employee {
    constructor(id, name, salary, benefits) {
        super(id, name, salary);
        this.benefits = benefits;
    }
    display() {
        return `${super.display()}, benefits = ${this.benefits}`;
    }
}
let fte = new FulltimeEmployee(200, 'Suresh', 20000, 'healthcare');
console.log(fte.display());
function multiply(x, y) {
    return x * y;
}
