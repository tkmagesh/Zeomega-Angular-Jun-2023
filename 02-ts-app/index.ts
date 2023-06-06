console.log('hi there!')

/* 
interface Product {
    id : number
    name : string
    cost : number
} 
*/

type Product = {
    id: number
    name: string
    cost: number
    category : string,
    inStock : boolean
} 

function applyDiscount(product : Product, discount : number){
    product.cost = product.cost * ((100-discount)/100)
}

//utilities
/* type NewProduct  = {
    name: string
    cost: number
} */

type NewProduct = Omit<Product, "id">

type TransactionType = {
    createdAt : Date
    updatedAt : Date
}

type TranscationProduct = Product & TransactionType

const tp : TranscationProduct = {
    id : 100,
    name : 'Pen',
    cost : 10,
    category : 'stationary',
    inStock : true,
    createdAt : new Date(),
    updatedAt : new Date()
}

type PatchProduct = Partial<Product>

type ReadOnlyProduct = Readonly<Product>

type CalculatorData = number | string
type CalculatorDataList = CalculatorData[]
type CalculatorDataDeepList = CalculatorDataList[]
type CalculatorDataFn = () => CalculatorData | CalculatorDataList | (CalculatorData | CalculatorDataList)[]
function add(...args : (CalculatorData | CalculatorDataList | CalculatorDataFn )[]) : number {
    return 0
}

add(10,20)
add(10)
add()
add(10, "20")
add([10,20], [20,30])
add([10, 20], [20, "30"])

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
    constructor(protected id: number, public name: string, public salary: number) {
        
    }
    display() {
        return `id = ${this.id}, name=${this.name}, cost = ${this.salary}`
    }
}

let emp = new Employee(100, 'Magesh', 10000)
console.log(emp.display())

class FulltimeEmployee extends Employee {
    constructor( id : number,  name : string,  salary : number, public benefits : string){
        super(id, name, salary)
    }
    override display(): string {
        return `${super.display()}, benefits = ${this.benefits}`
    }
}

let fte = new FulltimeEmployee(200, 'Suresh', 20000, 'healthcare')
console.log(fte.display())

function multiply(x : any,y : any) : any{
    return x * y
}