import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable, Subject} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireTaskListService {

  fireBaseTasks = new Subject<any>();
  fireBaseTasksChanged = new Subject<any>();

  constructor(private db: AngularFirestore) {
  }

  getTasks(): Observable<any> {

    // return this.db.collection('pendingTasks').valueChanges()git p;
    return this.db.collection('pendingTasks').snapshotChanges().pipe(map(docArray => {
      /*return docArray.map(doc => {
        return {
          id: doc.pendingtask.doc.id,
          ...doc.pendingtask.doc.data
        }
      })
    }).subscribe(p => {*/
      //  console.log(docArray);
      return docArray.map(doc => {
        // console.log(doc.payload.doc.data);
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data()
        };
      });
    }))
    /*.subscribe( res=>{
   this.fireBaseTasksChanged.next( ...res);
 });*/
  }

  addTask(task) {
    return this.db.collection('pendingTask').add(task);
  }

  delete(id: any) {
    
  }
}
