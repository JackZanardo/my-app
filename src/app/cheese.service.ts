import { Injectable } from '@angular/core';
import { Cheese } from './cheese';
import { CHEESES } from './mock-cheeses';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  getCheeses(): Observable<Cheese[]> {
    const cheeses = of(CHEESES);
    this.messageService.add('CheeseService: fetched cheeses');
    return cheeses;
  }
  constructor(private messageService: MessageService) { }
}
