import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableListDataSource } from './mat-table-list-datasource';
import {FireTaskListService} from "../../services/fire-task-list.service";
import {Observable} from "rxjs";
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mat-table-list',
  templateUrl: './mat-table-list.component.html',
  styleUrls: ['./mat-table-list.component.css']
})
export class MatTableListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Observable<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'note', 'registerDate', 'actions'];

  constructor(private fireService:  FireTaskListService, private  router: Router){

  }

  ngOnInit() {
    this.dataSource = this.fireService.getTasks();//  new MatTableListDataSource(this.paginator, this.sort);
  }

  addNew() {
    this.router.navigate(['/fireEditTasks', 0]);
  }

  deleteItem(id: any) {
    if (confirm(`Really delete this task?`)) {
      this.fireService.delete(id);
    }
  }
}
