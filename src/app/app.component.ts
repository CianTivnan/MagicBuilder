import { Component, Input } from '@angular/core';
import { MagicApiService } from './services/magic-api.service';
import { MagicResponse } from './magic-response';
import { DeckBuildComponent } from './deck-build/deck-build.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MagicApiService]
})
export class AppComponent {
  title = 'MagicBuilder';

  cards:any;
  errorMessage:any;
  show:boolean;

  constructor(private _magicService:MagicApiService) { }

  getCards(cardName:string):boolean {
    {
    this._magicService.getCards(cardName).subscribe(
      cards => {
        this.cards = cards;
        console.log(cards);
        console.log(this.cards);
      },
      error => this.errorMessage = <any>error
    );
  }
    return false;
  }

  logCard(card:JSON) {
    console.log(card);
  }

  getColour(chosenColour:string) {
    console.log(chosenColour);
    return(chosenColour);
  }

  getCmc(chosenCmc:number) {
    console.log(chosenCmc);
    return(chosenCmc);
  }
  
}
