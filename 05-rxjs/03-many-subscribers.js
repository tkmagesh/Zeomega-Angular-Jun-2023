const { interval } = require("rxjs");

var obs$ = interval(1000)


var sub1 = obs$.subscribe(val => console.log(`(subscriber-1), val = ${val}`))

var sub2;
setTimeout(() => {
    console.log('creating 2nd subscriber')
    sub2 = obs$.subscribe(val => console.log(`(subscriber-2), val = ${val}`))
}, 5000);

setTimeout(() => {
    sub1.unsubscribe()
    sub2.unsubscribe()
}, 15000); 
