# TypeScript #
TypeScript = JavaScript + Type Safety

## TypeScript Language Features ##
### Types ###
- any
- unknown
- never
- void

### Language Features ###
- interface
- enum
- decorators
- access modifiers (private, public, protected)
- static
- generics
- modules
- Utility types

## Application Setup ##
- Create a folder (02-ts-app)
- cd 02-ts-app
- npm init -y
- npm install typescript --save-dev
- npx tsc --init
- Add the following line in the package.json file (under the "scripts" section)
    - "serve": "tsc --outDir ./dist --watch",
- npm run serve

## Constructs ##
- let
- const
- array destructuring
```
    let nos = [3,1,4,2,5]
    let [x, y] = nos
```
- rest operator (array)
```
let nos = [3,1,4,2,5]
let [x, y, ...z] = nos
```
- spread operator (array)
```
var nos = [3,1,4,2,5]
var newNos = [ ...nos, 10, 20 , 30 ]
```
- object destructuring
```
var emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalore'
}
var {city,id} = emp
var {city: x,id : y} = emp
```
- rest operator (object)
```
var emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalore'
}
var { id : x, ...z } = emp
```
- spread operator (object)
```
var emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalore'
}
var fte = { ...emp, benefits = 'healthcare' }
```
- default arguments
```
function add(x = 10,y = 20){
    return x + y;
}
    
add()
add(100)
add(undefined, 200)
add(100,200)
```
- arrow function
```
/*
//function statement
function add(x,y){
    return x + y;
}

//function expression
var add = function(x,y){
    return x + y;
}

//arrow function
var add = (x,y) => {
    return x + y;
}
*/
var add = (x,y) => x + y;
```
- iterators
```
var nos = [3,1,4,2,5]
for (let no of nos)
    console.log(no)
```
- template strings
```
var x = 100, y = 200
var s1 = 'sum of ' + x + ' and ' + y + ' is ' + (x+y)
var s2 = `sum of ${x} and ${y} is ${x+y}`
```
- class
```
class Product {
    _id = 0;
    name = '';
    cost = 0;
    
    get id(){
        console.log('getter-id triggered');
        return this._id;
    }
    set id(val){
        console.log('setter-id triggered');
        this._id = val;
    }
    constructor(id, name, cost){
        this._id = id;
        this.name = name;
        this.cost = cost;
    }
    display(){
        return `id = ${this._id}, name=${this.name}, cost = ${this.cost}`
    }
}
```
