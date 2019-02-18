import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireTaskListService {

  constructor(private db: AngularFirestore) {
  }

  getTasks(): Observable<any> {

    // return this.db.collection('pendingTasks').valueChanges();
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
    }));
  }
}
