import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeekABooComponent} from "./peek-a-boo/peek-a-boo.component";
import {MissionComponent} from "./mission/mission.component";

const routes: Routes = [
    {path: 'p', component: PeekABooComponent},
    {path: 'm', component: MissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
