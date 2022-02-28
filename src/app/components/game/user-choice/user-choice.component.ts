import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bille } from 'src/app/models/bille.model';
import { Combinaison } from 'src/app/models/combinaison.model';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.css']
})
export class UserChoiceComponent implements OnInit, OnChanges {

  colorList: Array<string> = ["green","black", "purple", "blue","yellow","red","gray"];

  

  @Input()
  combinaisonWinner: Combinaison = {};
  @Input()
  gameStart: boolean = false;

  combinaisonPlayer : Combinaison = {};
  billeList: Bille[] = [];

  @Input()
  nbreBille: number = 4;

  @Input()
  nbColor: number = 4;

  buttonDisplay: Array<string> = [];

  @Output()
  combinaisonPlayerList = new EventEmitter<Combinaison>();

  constructor() { }

  ngOnChanges(){
    console.log(this.nbColor);
    
    switch (this.nbColor) {
      case 4:
        this.buttonDisplay = ["green","black", "", "purple", "blue","","reset","valider"];
        break;
      case 5:
        this.buttonDisplay = ["green","black", "", "purple", "blue","","yellow","","reset","valider"];       
        break;
      case 6:
        this.buttonDisplay = ["green","black", "", "purple", "blue","", "yellow", "red", "","reset","valider"];
        break;
      case 7:
        this.buttonDisplay = ["green","black", "purple", "", "blue","yellow","red","","reset","gray","valider"];
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){   
    this.combinaisonPlayerList.emit(this.combinaisonPlayer);

    this.onReset()
  }

  

  onReset(){
    this.combinaisonPlayer = {};
    this.billeList = [];
  }

  addColor(color: string){
    if(this.billeList.length < this.nbreBille){
      let bille: Bille = {
        color: color
      }
      this.billeList.push(bille);
    }
    
    this.combinaisonPlayer.bille = this.billeList;
  }
  
}
