import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROS } from '../hero-mock';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  hero:Hero={
    id:1,
    name:'salaka'
  };
  heross=HEROS;
  constructor() { }

  ngOnInit() {
  }

  share(){
    window.alert('sdddd');
  }
  selectedHero:Hero;

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
}
