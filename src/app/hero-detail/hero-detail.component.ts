import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../IHero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero?: Hero;
  constructor() {}

  ngOnInit(): void {}
}
