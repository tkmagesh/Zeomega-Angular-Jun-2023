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


## Software Requirements ##
- Chrome Browser
- Visual Studio Code (https://code.visualstudio.com)
- Node.js (https://nodejs.org)

### Verification ###
node --version

## Angular CLI ##
npm install -g @angular/cli
- verification
    - ng version
## Create an application
- ng new <app_name>

## JavaScript Suppliment Material ##
- https://bit.ly/javascript-training-videos

## Day-2 Homework ##
- Learn the following array methods
    - map
    - filter
    - reduce
    - forEach