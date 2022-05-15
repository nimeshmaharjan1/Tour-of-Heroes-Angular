import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../data/heroes';
import { Hero } from '../IHero';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage(`Selected Hero ID = ${hero.id}`);
    console.log(this.selectedHero);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
