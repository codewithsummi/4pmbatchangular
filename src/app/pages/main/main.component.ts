import { Component, OnInit,ViewChild } from '@angular/core';
import { MyserService } from 'src/app/services/myser.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
  product;
  
  
  constructor(private mser:MyserService) { }

  ngOnInit() {
     
    this.mser.getData("assets/product.json")
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.product=this.resData.pdata;
          console.log(this.product)
        }

      },err=>
      {
        console.log(err)
      })
  }

}
