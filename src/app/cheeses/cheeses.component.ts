import { Component, OnInit } from '@angular/core';
import { Cheese } from '../cheese';

@Component({
  selector: 'app-cheeses',
  templateUrl: './cheeses.component.html',
  styleUrls: ['./cheeses.component.css']
})
export class CheesesComponent implements OnInit {
  cheese: Cheese = {
    id: 1,
    name: 'Gorgonzola',
    texture: 'soft'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
