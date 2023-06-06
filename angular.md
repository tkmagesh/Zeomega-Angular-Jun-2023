# Angular #

## Angular Building Blocks ##

### Component ###
- Represents a **view**
- Encapsulates Presentation (HTML + CSS) + UI Behavior + State
- Can be composed together

### Directive ###
- Encapsulates the DOM manipulation logic
- A directive = component without template

### Pipe ###
- Encapsulates any data transformation logic for presenation

### Service ###
- Encapsulates any NON-UI responsibility

### Module ###
- Logical grouping of the above entities
- There has to be a minimum of 1 module
- Module is also the starting point (bootstrap) of an angular application
- Acts as a registry for angular application entities (components, directives, pipes & services)
- Aid in Dependency Injection

## Calculator Assignment ##
```
<h3>Calculator</h3>
<hr>
<input type="number" name="" id="">
<input type="number" name="" id="">
<br>
<button>Add</button>
<button>Subtract</button>
<button>Multiply</button>
<button>Divide</button>
<div>[Result]</div>
```

## Calculator-2 Assignment ##
<h3>Calculator-2</h3>
<hr>
<input type="number" name="" id="">
<select name="" id="">
<option value="">--Select--</option>
<option value="add">Add</option>
<option value="subtract">Subtract</option>
<option value="multiply">Multiply</option>
<option value="divide">Divide</option>
</select>
<input type="number" name="" id="">
<button>Calculate</button>
<div>[Result]</div>