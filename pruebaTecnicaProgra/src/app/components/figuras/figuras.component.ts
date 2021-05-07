import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.css']
})
export class FigurasComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  createFigure() {
    this.newItemEvent.emit('c');
  }

}
