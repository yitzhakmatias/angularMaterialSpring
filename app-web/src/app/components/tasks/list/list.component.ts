import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../services/task.service";

import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   tasks: Observable<any>;

  constructor(private  service: TaskService, private db: AngularFirestore) {
  }

  ngOnInit() {
    //this.getTasks();
    this.getCollection();
  }

  getCollection() {
    this.tasks= this.db.collection('pendingTasks').valueChanges()
      /*.subscribe(data => {
      this.tasks = data;
      console.log(data);
    });*/
  }

  getTasks() {

    this.service.getTasks().subscribe(
      data => {
        this.tasks = data;
      }, err => console.error(err),
      () => console.log('notes loaded')
    );
  }
}
