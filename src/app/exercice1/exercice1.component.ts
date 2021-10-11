import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public nombre = 0;
  public message = 'Bienvenue dans l\'exercice 1';

  public valider(): void {
    console.log('valider');
  }
}
