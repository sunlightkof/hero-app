import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = '英雄目录';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heloService: HeroService) {
  }
  ngOnInit(): void {
    // this.heroes = this.heloService.getHeros();
    this.heloService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
