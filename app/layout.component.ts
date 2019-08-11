import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  title = 'my-app';
  items = [1,2,3,4];
  boxvalue ;
  funcName ;
    firstValue: any;
    bool: boolean;
    answer: any;
    presentValue: any;
 check(){
     console.log(this.items);
     
 }
 valuePass(val : any){
    
     if(this.boxvalue){
         
      if (this.bool){
          
          if(this.boxvalue){
              
            this.boxvalue = val;
            this.bool = false;
          }
          else {
              this.boxvalue = (this.boxvalue)*10 + val;
          }
      }else{

      
      
     this.boxvalue = (this.boxvalue)*10 + val;
      }
     }
     else{
         this.boxvalue = val;
     }
 }
 add(){
     this.firstValue = this.boxvalue;
     this.boxvalue = this.boxvalue + "+";
     this.funcName = "add";
     this.bool = true;
 }
 subtract(){
     this.firstValue = this.boxvalue;
     this.boxvalue = this.boxvalue + "-";
     this.funcName = "subtract";
     this.bool = true;
 }
 multiply(){
    this.firstValue = this.boxvalue;
    this.boxvalue = this.boxvalue + "*";
    this.funcName = "multiply";
    this.bool = true;
}
divide(){
    this.firstValue = this.boxvalue;
    this.boxvalue = this.boxvalue + "/";
    this.funcName = "divide";
    this.bool = true;
}
clear(){
    this.boxvalue = " ";
}
 equate(){
     if(this.funcName === "add"){
     this.answer = this.firstValue + this.boxvalue;
     this.boxvalue = this.answer;
     }
     if(this.funcName === "subtract"){
         this.answer = this.firstValue - this.boxvalue;
         this.boxvalue = this.answer;
     }
     if(this.funcName === "multiply"){
        this.answer = this.firstValue * this.boxvalue;
        this.boxvalue = this.answer;
    }
    if(this.funcName === "divide"){
        this.answer = this.firstValue / this.boxvalue;
        
        this.boxvalue = this.answer;
    }
 }
 
  delete(){
      this.boxvalue = this.presentValue;
  }
}
