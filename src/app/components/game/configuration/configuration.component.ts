import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  @Input()
  displayConfiguration: boolean = true

  nbTries: number = 4;
  nbBille: number = 4;
  nbJoueur: number = 1;
  nbColor: number = 7;

  listNbTries: Array<number> = [2,3,4,5,6,7,8,9];
  listNbBille: Array<number> = [4,5,6,7];

  listConfig = {};
  
  @Output('listeConfig')
  configEmmitter = new EventEmitter();

  @Output('nbJoueur')
  joueurEmmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnStart(){
    console.log(this.nbBille + this.nbTries);
    this.listConfig = {
      'nbreBille' : this.nbBille,
      'nbreEssaiTotal' : this.nbTries,
      'nbJoueur' : this.nbJoueur,
      'nbColor' : this.nbColor
    }
    console.log(this.listConfig);
    this.configEmmitter.emit(this.listConfig);
    // this.billeEmmitter.emit(this.nbBille);
    // this.triesEmmitter.emit(this.nbTries);
  }

  onChangeJoueur(){
    if(this.nbJoueur == 1)
     this.joueurEmmitter.emit(false)
    else 
      this.joueurEmmitter.emit(true)
  }

}
