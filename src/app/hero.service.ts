import { Injectable } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { of, Observable } from 'rxjs';
import { MessageService } from 'src/app/message.service';

// This marks the class as one that participates in the dependency injection system. 
// The HeroService class is going to provide an injectable service, and it can also have its own injected dependencies.
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]>{
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes. 
    return of(HEROES);
  }
}
