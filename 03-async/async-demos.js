
(function(){
    // sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] return result`)
        return result
    }

    function addSyncClient(){
        console.log(`[@client] invoking the service`)
        const result = addSync(100,200)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient

    // async
    function addAsyncCallback(x, y, callback) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] return result`)
            callback(result)
        }, 5000);
        
    }

    function addAsyncCallbackClient() {
        console.log(`[@client] invoking the service`)
        addAsyncCallback(100, 200, function (result){
            console.log(`[@client] result = ${result}`)
        })
        
    }

    window['addAsyncCallbackClient'] = addAsyncCallbackClient

    function addAsyncPromise(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)
        const p = new Promise((resolveFn, rejectFn) => {
            setTimeout(() => {
                const result = x + y
                console.log(`   [@service] return result`)
                resolveFn(result)
            }, 5000);
        })
        
        return p;
    }
    window['addAsyncPromise'] = addAsyncPromise

    //Promise Client

    /* function addAsyncPromiseClient() {
        console.log(`[@client] invoking the service`)
        const p = addAsyncPromise(100, 200);
        p.then(function (result) {
            console.log(`[@client] result = ${result}`)
        })
    } 
    window['addAsyncPromiseClient'] = addAsyncPromiseClient 
    */

    async function addAsyncAwaitPromiseClient() {
        console.log(`[@client] invoking the service`)
        /* 
        const p = addAsyncPromise(100, 200);
        const result = await p; 
        */
        const result = await addAsyncPromise(100, 200);
        console.log(`[@client] result = ${result}`)
    }

    window['addAsyncAwaitPromiseClient'] = addAsyncAwaitPromiseClient 

    async function addAsyncAwaitPromiseClient2() {
       /* 
        console.log(`[@client] invoking the service-1`)
        const result1 = await addAsyncPromise(100, 200);
        console.log(`[@client] invoking the service-2`)
        const result2 = await addAsyncPromise(1000, 2000);
        console.log(`[@client] result1 = ${result1}`)
        console.log(`[@client] result2 = ${result2}`) 
        */
       
        /* 
        console.log(`[@client] invoking the service-1`)
        addAsyncPromise(100, 200)
            .then(function(result1){
                console.log(`[@client] invoking the service-2`)
                addAsyncPromise(1000, 2000)
                    .then(function(result2){
                        console.log(`[@client] result1 = ${result1}`)
                        console.log(`[@client] result2 = ${result2}`)
                    })
                
            }) 
        */
        console.log(`[@client] invoking the service-1`)
        const p1 =  addAsyncPromise(100, 200);
        console.log(`[@client] invoking the service-2`)
        const p2 = addAsyncPromise(1000, 2000);
        /* Promise.all([p1, p2])
            .then(function([result1, result2]){
                console.log(`[@client] result1 = ${result1}`)
                console.log(`[@client] result2 = ${result2}`)
            }) */
        const [result1, result2] = await Promise.all([p1, p2])
        console.log(`[@client] result1 = ${result1}`)
        console.log(`[@client] result2 = ${result2}`)
    }

    window['addAsyncAwaitPromiseClient2'] = addAsyncAwaitPromiseClient2 
   
})()

/* 
//Promise Chaining
// part - 1
const p2 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    return new Promise((resolveFn, rejectFn) => {
        setTimeout(() => {
            const doubleResult = result * 2
            resolveFn(doubleResult)
        }, 4000)
    })
})

// part - 2
const p3 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    const doubleResult = result * 2
    return new Promise((resolveFn, rejectFn) => {
        resolveFn(doubleResult)
    })
})

//part - 3
const p4 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    const doubleResult = result * 2
    return Promise.resolve(doubleResult)
})

//part - 4
const p5 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    const doubleResult = result * 2
    return doubleResult
})

*/