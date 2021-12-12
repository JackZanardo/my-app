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
