import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  noteForm: FormGroup;
  validMessage: string = "";

  constructor(private  service: TaskService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.noteForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      state: new FormControl(''),
      registerDate: new FormControl('', Validators.required),
    });
    this.route.paramMap.subscribe(p => {
      const id = +p.get('id');
      // console.log(p);
      if (id != 0)
        this.getNoteById(id);
    });
  }

  obSubmit(f: NgForm) {
    console.log(f);

    if (this.noteForm.valid) {

      this.validMessage = "Submited";
      this.service.createTask(this.noteForm.value).subscribe(
        data => {
          this.noteForm.reset();
          this.router.navigate(['/listTasks']);
        },
        error => {
          return Observable.throw(error)
        },
      );
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
    return;
  }

  getNoteById(id) {
    this.service.getTaskById(id).subscribe(data => {
        this.noteForm.setValue(data);
      },
      error => {
        return Observable.throw(error)
      });
  }
}
