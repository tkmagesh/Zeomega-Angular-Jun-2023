const { Observable, interval,timer } = require('rxjs')

function fromInterval(interval) {
    let obs$ = new Observable(subscriber => {
        let no = 0
        let timerId = setInterval(() => {
            subscriber.next(no++)
        }, interval);
        return () => {
            console.log('unsubscribed!!')
            clearInterval(timerId)
        }
    })
    return obs$
}

// var interval$ = fromInterval(500)
// var interval$ = interval(500)
var timer$ = timer(2000, 500)
const subscriber = timer$.subscribe(val => console.log(val))

setTimeout(() => {
    subscriber.unsubscribe()
}, 5000);