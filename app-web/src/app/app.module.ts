import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './components/nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRippleModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatSelectModule, MatRadioModule, MatNativeDateModule, MatOptionModule
} from '@angular/material';
import {ListComponent} from './components/tasks/list/list.component';
import {EditComponent} from './components/tasks/edit/edit.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskService} from "./services/task.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {FormsModule} from '@angular/forms';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";

import {MatTableListComponent} from './components/mat-table-list/mat-table-list.component';
import {FireEditTaskComponent} from "./components/fire-edit-task/fire-edit-task.component";


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule, MatButtonModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule
];
const fireBase = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    EditComponent,
    DashboardComponent,
    TaskListComponent,
    FireEditTaskComponent,
    MatTableListComponent


  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,

    ...modules,
    FormsModule,
    MatSortModule,
    ...fireBase,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
