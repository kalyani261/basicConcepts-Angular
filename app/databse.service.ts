import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DatabseService {

  constructor(private firebase: AngularFireDatabase) { }
usernamelist: AngularFireList<any>;

form = new  FormGroup({
  $key: new FormControl(null),
  uname: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  /*location: new FormControl('')*/
});


getStudentnames()
{
  this.usernamelist = this.firebase.list('student');/*loginf is an name of databse*/
  return this.usernamelist.snapshotChanges();
}

insertStudentNames(student)
{
      this.usernamelist.push({
    uname: student.uname,
    password: student.password
    });
}

deleteStudent($key: string)
{
  this.usernamelist.remove($key);
}


}
