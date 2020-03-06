import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { FormGroup, FormBuilder,Validators,AbstractControl } from '@angular/forms';
import {SidebarComponent} from '../pages/sidebar/sidebar.component';
function AgeRangeValidator(ac:AbstractControl)
{
   if((isNaN(ac.value)) || ac.value<18 || ac.value>45)
   {
     return {'myAgeError':true};
   }
   return null;
}
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit,AfterViewInit {
  @ViewChild(SidebarComponent,{static:false}) child:SidebarComponent;
myForm:FormGroup
  constructor(private fb:FormBuilder) { 
    this.myForm=fb.group(
      {
        'name':["",[Validators.required,Validators.pattern("[a-z ]+")]],
        'age':["",AgeRangeValidator]
      }
    )
  }
  
  
  postData()
  {
    let fData=this.myForm.getRawValue();//access whole data of form 
    console.log(fData);
    let name=this.myForm.controls.name.value;//particular data 
  }

  ngOnInit() {
    
  }
  ngAfterViewInit()
  {
    console.log(this.child.whoAmI()); 
  }

}
