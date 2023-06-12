import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "sort"
})
export class SortPipe<T> implements PipeTransform {
    transform(list: T[], attrName : keyof T) : T[] {
        if (!list || !list.length || attrName === '') return list;
        return list.sort((a, b) => {
            if (a[attrName] < b[attrName]) return -1;
            if (a[attrName] > b[attrName]) return 1;
            return 0
        })
    }
}