import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';
// import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',  //The CSS element selector, 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero:Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void{
    //  this.heroes = this.heroService.getHeros();
    // Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
    this.heroService.getHeros()
        .subscribe(heroes => this.heroes = heroes);
  }
  // The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
    this.getHeroes();
  }

}
