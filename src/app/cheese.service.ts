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

  getCheese(id: Number): Observable<Cheese> {
    const cheese = CHEESES.find(c => c.id === id)!;
    this.messageService.add(`CheeseService: fetched cheese id=${id}`);
    return of(cheese);
  }

  constructor(private messageService: MessageService) { }
}
