import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : "sort",
    pure : true
})
export class SortPipe<T> implements PipeTransform {
    transform(list: T[], attrName : keyof T, descending : boolean = false) : T[] {
        console.log('sort.transform triggered')
        const isDesc = descending ? -1 : 1;
        if (!list || !list.length || attrName === '') return list;
        return list.sort((a, b) => {
            if (a[attrName] < b[attrName]) return -1 * isDesc;
            if (a[attrName] > b[attrName]) return 1 * isDesc;
            return 0
        })
    }
} 


/* type Comparer<T> = (a : T, b : T) => number;

@Pipe({
    name: "sort"
})
export class SortPipe<T> implements PipeTransform {
    private getComparer(attrName : keyof T) : Comparer<T> {
        return (a : T, b : T) : number => {
            if (a[attrName] < b[attrName]) return -1;
            if (a[attrName] > b[attrName]) return 1;
            return 0
        }
    }
    private getDescComparer(comparer : Comparer<T>) : Comparer<T> {
        return (a: T, b: T): number => {
            return comparer(a,b) * -1;
        }
    }
    transform(list: T[], attrName: keyof T, descending: boolean = false): T[] {
        if (!list || !list.length || attrName === '') return list;
        let comparer = this.getComparer(attrName)
        if (descending) comparer = this.getDescComparer(comparer)
        return list.sort(comparer)
    }
} */