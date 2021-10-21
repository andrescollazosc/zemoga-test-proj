import { Component, OnInit } from '@angular/core';
import { CharactersDataMock } from './mocks/characters-data.mock';
import { CharactersDataModel } from './models/characters-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zemoga-test';
  public character: CharactersDataModel = {
    id: '0',
    name: 'a', 
    history: 'd'
  };

  ngOnInit(): void {
    this.getCharacter();
  }

  private getCharacter(): void {
    this.character = CharactersDataMock.getCharacters()[0];
  }

}
