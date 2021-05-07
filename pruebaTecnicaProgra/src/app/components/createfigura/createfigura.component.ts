import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-createfigura',
  templateUrl: './createfigura.component.html',
  styleUrls: ['./createfigura.component.css']
})
export class CreatefiguraComponent implements OnInit {

  @Output() backItemEvent = new EventEmitter<string>();

  figura = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  figuraLineal = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  figuraLleno = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  figuraLlenoSegunda = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  figuraFigura = [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1];
  figuraMedioLleno = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  figuraTyt = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1];

  selectedOption: string;

  options = [
    { name: "lineal", value: 1 },
    { name: "lleno", value: 2 },
    { name: "llenoSegunda", value: 3 },
    { name: "figura", value: 4 },
    { name: "medioLleno", value: 5 },
    { name: "tYt", value: 6 }
  ]

  constructor() { }


  ngOnInit(): void {


  }


  guardarFigura() {
    console.log(this.figura)
  }

  cambiarFiguraLineal() {
    if (this.selectedOption == 'lineal') {
      this.figura = this.figuraLineal
    } else {
      if (this.selectedOption == 'lleno') {
        this.figura = this.figuraLleno
      } else {
        if (this.selectedOption == 'llenoSegunda') {
          this.figura = this.figuraLlenoSegunda
        } else {
          if (this.selectedOption == 'figura') {
            this.figura = this.figuraFigura
          } else {
            if (this.selectedOption == 'medioLleno') {
              this.figura = this.figuraMedioLleno
            } else {
              if (this.selectedOption == 'tYt') {
                this.figura = this.figuraTyt
              } else {
              }
            }
          }
        }
      }

    }
  }


  cambiarColor(position, color) {
    this.figura[position] = color;
  }

  back() {
    this.backItemEvent.emit('f');
  }





}
