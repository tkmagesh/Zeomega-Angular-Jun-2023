# Angular #

## Angular Building Blocks ##

### Component ###
- Represents a **view**
- Encapsulates Presentation (HTML + CSS) + UI Behavior + State
- Can be composed together

### Directive ###
- Encapsulates the DOM manipulation logic
- A directive = component without template
- Types of Directives
    - Attribute directive
        - Manipulate the attributes of existing DOM nodes
        - DONOT change the structure of the DOM tree
        - usage : **[directive_name]**
    - Structural directive
        - Change the structure of the DOM tree by adding / removing DOM nodes
        - usage : *directive_name

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
```
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
```

## Bug Tracker ##
- ng new bug-tracker-app

### Use Cases ###
1. Add new bugs (done)
2. List the added bugs (done)
3. Remove the added bugs (done)
4. Toggle the 'closed' status of any bug (done)
5. Remove all 'closed' bugs (done)
6. Display stats (# of closed bugs / total # of bugs) (done)
7. Improvise the bug display (done)
8. Sort the bugs (done)
9. Persist the bugs in the localStorage (done)
    ```
        window.localStorage (object)
            - key-value store
            - both the key & value must be strings
            - key has to be unique
            - data security through Same Origin Policy
            - ~15MB in chrome
            - apis
                * setItem(key, value)
                * getItem(key) => value
                * removeItem(key)
                * key(index) => key @ index
                * clear()
                * length
            - hints
                * read & write individual bugs
                * use JSON.stringify() and JSON.parse() for serialization & deserialization
    ```
10. Display createdAt as 'elapsed' (done)
11. Persist the bugs in the server
12. Implement data validations
13. Make the bugs accessible using unique urls (routing)
14. Implement 'Projects' module
15. Package & deployment


### Pure Function ###
- a function whose invocation can be replaced with the result WITHOUT affecting the final outcome

### Async Programming ###
- Async Operation - An operation that is initiated but not waited for its completion

### JSON-server ###
npx json-server db.json
