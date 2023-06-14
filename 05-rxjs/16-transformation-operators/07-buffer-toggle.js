const { Subject } = require('rxjs');
const { bufferToggle } = require('rxjs/operators');

// 2 Subjects to toggle the buffer
const toggleOn$ = new Subject();
const toggleOff$ = new Subject();

const toggleOffClosing$ = () => toggleOff$;

// The data source
const source$ = new Subject();

const subscription = source$
    .pipe(bufferToggle(toggleOn$, toggleOffClosing$))
    .subscribe(val => console.log('buffered data:', val));

// The simulation
setTimeout(() => source$.next(1), 2000);
setTimeout(() => source$.next(2), 3000);
setTimeout(() => toggleOn$.next(true), 3400);
setTimeout(() => source$.next(3), 4000);

setTimeout(() => source$.next(4), 5000);
setTimeout(() => source$.next(5), 6000);
setTimeout(() => toggleOff$.next(true), 6200);
setTimeout(() => source$.next(6), 7000);

setTimeout(() => subscription.unsubscribe(), 10000);