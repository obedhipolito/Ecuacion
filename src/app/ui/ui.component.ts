import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { y } from '../ecuacion/ecuacion.component';
import { array } from '../arreglo/array';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  array: String = "";
  a: number = 0;
  b: number = 0;
  Result: any;

  ngOnInit(): void {
  }

  y(){
    let myresult = [];
    let array: number[] = this.array.split(",").map(number => {return parseFloat(number)});
    myresult = y(array,this.a,this.b);
    this.Result = myresult
  }

}
