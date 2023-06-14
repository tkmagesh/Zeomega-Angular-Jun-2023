const { interval, Observable } = require("rxjs");
const { filter} =  require('rxjs/operators')

var intervalObs$ = interval(500)

/* 
function filterEven(obs$){
    return new Observable(observer => {
        var sourceSub = obs$.subscribe(no => {
            if (no % 2 === 0){
                observer.next(no)
            }
        })

        return () => {
            console.log('even no generating observable is unscribed. Also unsubscribing the source observable')
            sourceSub.unsubscribe()
        }
    })
}

function filterOdd(obs$) {
    return new Observable(observer => {
        var sourceSub = obs$.subscribe(no => {
            if (no % 2 !== 0) {
                observer.next(no)
            }
        })

        return () => {
            console.log('odd no generating observable is unscribed. Also unsubscribing the source observable')
            sourceSub.unsubscribe()
        }
    })
} 
*/

function filterEven(obs$) {
    return new Observable(observer => {
        var sourceSub = obs$.subscribe(no => {
            if (no % 2 === 0) {
                observer.next(no)
            }
        })

        return () => {
            console.log('even no generating observable is unscribed. Also unsubscribing the source observable')
            sourceSub.unsubscribe()
        }
    })
}

/* 
function filter(obs$, predicateFn) {
    return new Observable(observer => {
        var sourceSub = obs$.subscribe(no => {
            if (predicateFn(no)) {
                observer.next(no)
            }
        })

        return () => {
            console.log('odd no generating observable is unscribed. Also unsubscribing the source observable')
            sourceSub.unsubscribe()
        }
    })
} 
*/

// var evenNos$ = filterEven(intervalObs$)
// var oddNos$ = filterOdd(intervalObs$)

// var evenNos$ = filter(intervalObs$, no => no % 2 === 0)
// var oddNos$ = filter(intervalObs$, no => no % 2 === 1)

var evenNo$ = intervalObs$
    .pipe(
        filter(no => no % 2 ===0)
    )

var nosSub = evenNo$.subscribe(val => console.log('No :', val))

setInterval(() => {
    nosSub.unsubscribe()
}, 5000);