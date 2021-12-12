import { Component, OnInit } from '@angular/core';
import { Cheese } from '../cheese';
import { CheeseService } from '../cheese.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cheeses',
  templateUrl: './cheeses.component.html',
  styleUrls: ['./cheeses.component.css']
})
export class CheesesComponent implements OnInit {
  selectedCheese?: Cheese;
  onSelect(cheese: Cheese): void {
    this.selectedCheese = cheese;
    this.messageService.add(`CheeseComponent: Selected Cheese id=${cheese.id}`)
  }
  cheeses: Cheese[] = [];

  constructor(private cheeseService: CheeseService, private messageService: MessageService) { }

  getCheeses(): void {
    this.cheeseService.getCheeses()
      .subscribe(cheeses => this.cheeses = cheeses);
  }
  ngOnInit(): void {
    this.getCheeses();
  }
}
