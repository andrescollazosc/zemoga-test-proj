import { Component, Input, OnInit } from '@angular/core';
import { CharactersDataModel } from 'src/app/models/characters-data.model';

@Component({
  selector: 'app-hero-navbar',
  templateUrl: './hero-navbar.component.html',
  styleUrls: ['./hero-navbar.component.scss']
})
export class HeroNavbarComponent implements OnInit {

  @Input() characterSetup: CharactersDataModel = {};

  ngOnInit(): void {
    if (this.characterSetup) {
      this.characterSetup = {
        id: '0',
        name: 'Name here',
        history: 'History here'
      };
    }
  }

}
