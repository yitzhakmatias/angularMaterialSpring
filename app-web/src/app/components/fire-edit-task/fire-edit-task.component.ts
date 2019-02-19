import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {FireTaskListService} from "../../services/fire-task-list.service";

@Component({
  selector: 'app-fire-edit-task',
  templateUrl: './fire-edit-task.component.html',
  styleUrls: ['./fire-edit-task.component.css']
})
export class FireEditTaskComponent implements OnInit {
  taskForm: FormGroup;
  validMessage: string = "";

  constructor(private route: ActivatedRoute, private  service: FireTaskListService) {
  }

  ngOnInit() {

    this.taskForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required),
      state: new FormControl(''),
      registerDate: new FormControl('', Validators.required),
    });
    this.route.paramMap.subscribe(p => {
      const id = +p.get('id');
      // console.log(p);
      if (id != 0)
        this.getTaskById(id);
    });

  }

  obSubmit(f: NgForm) {
    if (this.taskForm.valid) {

      this.validMessage = "Submited";
      this.service.addTask(this.taskForm.value);
        /*.subscribe(
        data => {
          this.noteForm.reset();
          this.router.navigate(['/taskList']);
        },
        error => {
          return Observable.throw(error)
        },
      );*/
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

  private getTaskById(id: number) {

  }
}
