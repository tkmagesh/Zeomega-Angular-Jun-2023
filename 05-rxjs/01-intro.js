var { Observable, of, from, interval } = require('rxjs')

/* let obs$ = new Observable(observer => {
    console.log('sending values')
    observer.next(10)
    observer.next(20)
    observer.next(30)
    observer.next(40)
    // observer.error(new Error('invalid arguments'))
    observer.complete()
    return () => console.log('observable unsubscribed')
})


obs$.subscribe({
    next : no => console.log(no),
    complete : () => console.log('received all the values'),
    error : err => console.log(`error occured : ${err}`)
}) 
 */
/* 
obs$.subscribe( 
    no => console.log(no),
    err => console.log(`error occured : ${err}`),
    () => console.log('received all the values'), 
) 
*/

// obs$.subscribe(no => console.log(no))
// obs$.subscribe()



let timerObs$ = new Observable(observer => {
    console.log('observable created')
    let no = 0
    const timerId = setInterval(() => {
        observer.next(++no)
    }, 1000);
    return () => {
        console.log('subscriber has unsubscribed. stoping the timer')
        clearInterval(timerId)
    }
})

const subscription = timerObs$.subscribe(no => console.log(`timer [1]: ${no}`))

setTimeout(() => {
    subscription.unsubscribe()
}, 10000); 


setTimeout(() => {
    const subscription2 = timerObs$.subscribe(no => console.log(`timer [2]: ${no}`))
    setTimeout(() => {
        subscription2.unsubscribe()
    }, 10000);
}, 5000);

/*
setTimeout(() => {
    subscription.unsubscribe()
}, 10000); 
*/

//using interval()
/* 
const subscription = interval(1000).subscribe(no => console.log(`timer [1]: ${no}`))

setTimeout(() => {
    const subscription2 = interval(1000).subscribe(no => console.log(`timer [2]: ${no}`))
    setTimeout(() => {
        subscription2.unsubscribe()
    }, 10000);
}, 5000);

setTimeout(() => {
    subscription.unsubscribe()
}, 10000); */

let values = [10, 20, 30, 40, 50]
/* 
var arrObs$ = new Observable(observer => {
    for (let value of values)
        observer.next(value)
    observer.complete()
}) 
*/
// var arrObs$ = from(values)
/* 
var arrObs$ = of(values)
arrObs$.subscribe(no => console.log(no)) 
*/

/*
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    }, 4000);
})

var promiseObj$ = from(promise)

let subscription = timerObs$.subscribe({
    next : val => console.log(val),
    complete : () => console.log('All the values received'),
    error : err => console.log('Error :', err)
})

setTimeout(() => {
    subscription.unsubscribe()    
}, 10000);
 */


/* 
Write a function that creates an observable for the given array of values 
*/