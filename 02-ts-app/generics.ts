

function filterEvenNos(list : number[]) : number[]{
    const result : number[] = []
    for (let no of list){
        if (no % 2 === 0){
            result.push(no)
        }
    }
    return result;
}

function filterOddNos(list: number[]): number[] {
    const result: number[] = []
    for (let no of list) {
        if (no % 2 !== 0) {
            result.push(no)
        }
    }
    return result;
}

function filterNos(list: number[], fn : (no : number) => boolean ): number[] {
    const result: number[] = []
    for (let no of list) {
        if (fn(no)) {
            result.push(no)
        }
    }
    return result;
}

function filterStrings(list: string[], fn: (no: string) => boolean): string[] {
    const result: string[] = []
    for (let no of list) {
        if (fn(no)) {
            result.push(no)
        }
    }
    return result;
}

class Product {

}
function filterProducts(list: Product[], fn: (no: Product) => boolean): Product[] {
    const result: Product[] = []
    for (let no of list) {
        if (fn(no)) {
            result.push(no)
        }
    }
    return result;
}

function filterAny(list: any[], fn: (no: any) => boolean): any[] {
    const result: any[] = []
    for (let no of list) {
        if (fn(no)) {
            result.push(no)
        }
    }
    return result;
}

function filter<T>(list: T[], fn: (no: T) => boolean): T[] {
    const result: any[] = []
    for (let no of list) {
        if (fn(no)) {
            result.push(no)
        }
    }
    return result;
}

const data = [3,1,4,2,5]
/* 
const evenNos = filter(data, function(no){
    return no % 2 === 0
}) 
*/
// const evenNos = filterNos(data, no => no % 2 === 0)
/* 
const evenNos = filterAny(data, function(no : string) : boolean {
    return no % 2 === 0
}) 
*/
/* 
const evenNos = filter<number>(data, function (no: number): boolean {
    return no % 2 === 0
})  
*/

const evenNos = filter(data, function (no) {
    return no % 2 === 0
}) 
/* const oddNos = filter(data, function (no) {
    return no % 2 !== 0
}) */

const oddNos = filterNos(data, no => no % 2 !== 0)