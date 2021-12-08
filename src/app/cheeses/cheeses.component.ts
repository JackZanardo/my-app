import { Component, OnInit } from '@angular/core';
import { Cheese } from '../cheese';
import { CHEESES } from '../mock-cheeses';

@Component({
  selector: 'app-cheeses',
  templateUrl: './cheeses.component.html',
  styleUrls: ['./cheeses.component.css']
})
export class CheesesComponent implements OnInit {
  selectedCheese?: Cheese;
  onSelect(cheese: Cheese): void {
    this.selectedCheese = cheese;
  }
  cheeses = CHEESES;

  constructor() { }

  ngOnInit(): void {
  }

}
