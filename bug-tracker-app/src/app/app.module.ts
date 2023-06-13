import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { UtilsModule } from './utils/utils.module';


@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
