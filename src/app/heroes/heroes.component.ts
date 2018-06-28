import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';

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
  
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  // The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  }

}
