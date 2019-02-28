import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';

@Component({
  selector: 'app-initiative-display',
  templateUrl: './initiative-display.component.html',
  styleUrls: ['./initiative-display.component.scss']
})
export class InitiativeDisplayComponent implements OnInit {
  characters: Character[];

  constructor() {}

  ngOnInit() {
    this.characters = [
      { name: 'Mal', initiative: 21, health: 30 },
      { name: 'Foo Foo', initiative: 18, health: 30 },
      { name: 'Myrrh', initiative: 10, health: 30 }
    ];
  }
}
