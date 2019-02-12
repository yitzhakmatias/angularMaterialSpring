import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';

import {TaskService} from "../../services/task.service";
import {Observable} from "rxjs";
import {EditComponent} from "../tasks/edit/edit.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  dataSource: Observable<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'category', 'registerDate', "actions"];

  constructor(private service: TaskService, private  router: Router) {

  }

  ngOnInit() {
    this.dataSource = this.service.getTasks();
    console.log(this.dataSource);
    // new TaskListDataSource(this.paginator, this.sort);
  }

  /*addNew(issue: any) {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
       // this.exampleDatabase.dataChange.value.push(this.service.getTasks());
       // this.refreshTable();
      }
    });
  }*/

  addNew() {
    this.router.navigate(['/editTasks', 0]);
  }

  deleteItem(id: any) {
    if (confirm(`Really delete this task?`)) {
      this.service.delete(id).subscribe(data => {
        const msg = data;

        //this.router.navigateByUrl('/listTasks', {skipLocationChange: true}).then(() =>
          //this.router.navigate(["listTasks"]));
        this.ngOnInit();

        // this.router.navigate(['/listTasks']);
      }, error => {
        return Observable.throw(error)
      });
    }
  }

  pageRefresh() {
    location.reload();
  }
}
