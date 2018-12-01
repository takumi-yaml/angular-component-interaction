import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import { ExampleComponent } from './example/example.component';
import { TestComponent } from './test/test.component';
import { ExampleChildComponent } from './example/example-child/example-child.component';
import { MissionComponent } from './mission/mission.component';
import { AstronautComponent } from './mission/astronaut/astronaut.component';


@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    ExampleComponent,
    TestComponent,
    ExampleChildComponent,
    MissionComponent,
    AstronautComponent
  ],
  imports: [
      FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
