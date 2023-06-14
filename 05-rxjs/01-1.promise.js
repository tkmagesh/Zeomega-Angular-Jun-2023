const { Observable, from } = require("rxjs");

function addAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`)
    var p = new Promise(function (resolveFn, rejectFn) {
        setTimeout(() => {
            var result = x + y
            console.log(`   [@service] returning result`)
            resolveFn(result)
        }, 4000);
    })
    return p;
}


/* function fromPromise(p){
    return new Observable(observer => {
        p.then(result => observer.next(result))
        .catch(err => observer.error(err))
    })
} */


// client
var obs$ = from(addAsyncPromise(100,200))
obs$.subscribe(result => console.log(result))