import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';
import { Component, OnInit } from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detial.component.html',
})
export class HeroDetailComponent {
    hero: Hero;
    
    constructor(
      private _heroService: HeroService,
      private _routeParams: RouteParams) {}
      
    ngOnInit() {
      // using Javascript (+) operator to convert string to number
      let id = +this._routeParams.get('id');
      this._heroService.getHero(id)
        .then(hero => this.hero = hero);
    }
    
    goBack() {
      window.history.back();
    } 
}
