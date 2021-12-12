import { Component, OnInit, Input } from '@angular/core';
import { Cheese } from '../cheese';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CheeseService } from '../cheese.service';

@Component({
  selector: 'app-cheese-detail',
  templateUrl: './cheese-detail.component.html',
  styleUrls: ['./cheese-detail.component.css']
})
export class CheeseDetailComponent implements OnInit {
  @Input() cheese?: Cheese;
  constructor(
    private route: ActivatedRoute,
    private cheeseService: CheeseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCheese()
  }

  getCheese(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cheeseService.getCheese(id)
    .subscribe(cheese => this.cheese = cheese)  
  }

  goBack(): void {
    this.location.back();
  }

}
