import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Service1Service } from '../moduleservice/service1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient, private frmbuilder: FormBuilder, private api:Service1Service) { 
    /* =======================================
                  Model Form
    ======================================= */
    // this.formvlaue = frmbuilder.group({
    //   fullname:[''],
    //   emailaddress:[''],
    //   mobilenumber:[''],
    //   fees:['']
    // });
    // this.getAllStudent()
  }

  

  /* ==========================================
  store studentDetails class in studentModelObj
  ========================================== */
  // studentModelObj: studentDetails = new studentDetails();
  // studentData: any;


  /* ===========================================
            add student data in api
  =========================================== */
  // postStudentDetails() {
  //   this.studentModelObj.fullname = this.formvlaue.value.fullname;
  //   this.studentModelObj.emailaddress = this.formvlaue.value.emailaddress;
  //   this.studentModelObj.mobilenumber = this.formvlaue.value.mobilenumber;
  //   this.studentModelObj.fees = this.formvlaue.value.fees;

  //   this.api.postStudents(this.studentModelObj).subscribe(res=>{
  //     console.warn(res);
  //     console.warn("student record added succsfully");
  //     let ref = document.getElementById('cancel')
  //     ref?.click();
  //     this.formvlaue.reset();
  //     this.getAllStudent();
  //   },
  //     err=>{
  //     alert("somthing went worng, plese check again");
  //   });
  // }


  /* ===========================================
            get student data in api
  =========================================== */
  // getAllStudent() {
  //   this.api.getStudents().subscribe(res=>{
  //     this.studentData = res;
  //   });
  // }


  /* ============================================
          delet student data in api
  ============================================ */
  // deletStudents(studentsDetails:any): void {
  //   this.api.deletStudent(studentsDetails.id).subscribe(res=>{
  //     alert("student record deleted");
  //     this.getAllStudent();
  //   })
  // }


  /* ============================================
              eadit student data in api
  ============================================ */
  // onEadit(studentsDetails:any) {
  //   this.studentModelObj.id = studentsDetails.id;
  //   this.formvlaue.controls['fullname'].setValue(studentsDetails.fullname);
  //   this.formvlaue.controls['emailaddress'].setValue(studentsDetails.emailaddress);
  //   this.formvlaue.controls['mobilenumber'].setValue(studentsDetails.mobilenumber);
  //   this.formvlaue.controls['fees'].setValue(studentsDetails.fees);
  // }


  /* ==============================================
            update student data in api
  ============================================== */
  // updateStudentDetals() {
  //   this.studentModelObj.fullname = this.formvlaue.value.fullname;
  //   this.studentModelObj.emailaddress = this.formvlaue.value.emailaddress;
  //   this.studentModelObj.mobilenumber = this.formvlaue.value.mobilenumber;
  //   this.studentModelObj.fees = this.formvlaue.value.fees;
    
  //   this.api.updateStudent(this.studentModelObj, this.studentModelObj.id).subscribe(res=>{
  //     alert("student record updated");
  //     let ref = document.getElementById('cancel')
  //     ref?.click();
  //     this.formvlaue.reset();
  //     this.getAllStudent();
  //   })
  // }





  ngOnInit(): void {
    // this.callapi();
  }


  /* ========================================
        get data.json array of objest
  ======================================== */
  // data:any;
  // callapi() {
  //   this.http.get('assets/data.json').subscribe(respo=>{
  //     console.warn(respo);
  //     this.data=respo;
  //   });
  // }



  /* ==========================================
            get form values and console
  ========================================== */
  // formvlaue:FormGroup;
  // fullname:any='';
  // mobilenumber:any='';
  // emialaddress:any='';
  // password:any='';

  // submit(jsonform:any) {
  //   this.fullname = jsonform.controls.fullname.value;
  //   this.mobilenumber = jsonform.controls.mobilenumber.value;
  //   this.emialaddress = jsonform.controls.emailaddress.value;
  //   this.password = jsonform.controls.password.value;
  //   console.warn(jsonform);
  //   console.warn(this.fullname);
  //   console.warn(this.mobilenumber);
  //   console.warn(this.emialaddress);
  //   console.warn(this.password);
  // }
}


  /* ====================================
          studentDetails class
  ==================================== */
  // export class studentDetails {
  //   id: number = 0;
  //   fullname:string = '';
  //   emailaddress:string = '';
  //   mobilenumber:string = '';
  //   fees:string = '';
  // }



