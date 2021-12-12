import { Component, OnInit } from '@angular/core';
import { Cheese } from '../cheese';
import { CheeseService } from '../cheese.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cheeses: Cheese[] = [];

  constructor(private cheeseService: CheeseService) { }

  ngOnInit(): void {
    this.getCheeses();
  }

  getCheeses(): void {
    this.cheeseService.getCheeses()
    .subscribe(cheeses => this.cheeses = cheeses.slice(1, 5));
  }

}
