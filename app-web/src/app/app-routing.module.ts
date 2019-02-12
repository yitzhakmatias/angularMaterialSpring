import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import {ListComponent} from "./components/tasks/list/list.component";
import {EditComponent} from "./components/tasks/edit/edit.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard'
    /* , children: [
       {path: 'listTasks', component: ListComponent},
       {path: 'editTasks', component: EditComponent}
     ]**/
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'listTasks', component: ListComponent},
  {path: 'editTasks/:id', component: EditComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
