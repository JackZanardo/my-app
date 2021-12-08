import { Component, OnInit, Input } from '@angular/core';
import { Cheese } from '../cheese';

@Component({
  selector: 'app-cheese-detail',
  templateUrl: './cheese-detail.component.html',
  styleUrls: ['./cheese-detail.component.css']
})
export class CheeseDetailComponent implements OnInit {
  @Input() cheese?: Cheese;
  constructor() { }

  ngOnInit(): void {
  }

}
