import { NgModule } from "@angular/core";
import { TrimTextPipe } from "./pipes/trimText.pipe";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortPipe } from "./pipes/sort.pipe";

@NgModule({
    declarations : [
        TrimTextPipe,
        ElapsedPipe,
        SortPipe
    ],
    exports : [
        TrimTextPipe,
        ElapsedPipe,
        SortPipe
    ]
})
export class UtilsModule{

}