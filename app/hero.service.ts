import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  
  //Like getHeroes, it also returns a promise. But this promise waits 2 seconds before resolving the promise with mock heroes.
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
}
