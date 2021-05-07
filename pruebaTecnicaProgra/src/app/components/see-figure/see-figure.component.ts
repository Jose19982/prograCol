import { Component, OnInit } from '@angular/core';
import {FigurasService} from '../../services/figuras.service'

@Component({
  selector: 'app-see-figure',
  templateUrl: './see-figure.component.html',
  styleUrls: ['./see-figure.component.css']
})
export class SeeFigureComponent implements OnInit {

  figura=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  info:any={}

  constructor(public verFigura:FigurasService) {
   }

  ngOnInit(): void {

    this.verFigura.obtenerFiguras().subscribe(data=>{
      this.figura=data.positions;
    })
  }

  /* funtion to change color of the cells */
  cambiarColor(position,color){
    this.figura[position]=color;
  }

}
