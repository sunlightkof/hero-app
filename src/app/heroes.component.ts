import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  title = '英雄目录';
  selectedHero: Hero;
  heroes: Hero[];

  constructor( private router: Router,
    private heroService: HeroService) {
  }
  ngOnInit(): void {
    // this.heroes = this.heloService.getHeros();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
