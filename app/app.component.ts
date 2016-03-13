import {Component} from 'angular2/core';

interface Hero {
    id: name;
    name : string;
}

@Component({
    selector: 'my-app',
template:`
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
    <ul class="heroes">
    <li>
      <!-- each hero goes here -->
    </li>
  </ul>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <div><input [(ngModel)]="hero.name" placeholder="name"></div>
  </div>
  `
})
export class AppComponent {
    public title = "Tour of Heroes";
    public hero: Hero = {
        id: 1,
        name: 'Shinora007'
    };
    public heroes = HEROES;
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
