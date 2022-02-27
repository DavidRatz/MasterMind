import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bille } from 'src/app/models/bille.model';
import { Combinaison } from 'src/app/models/combinaison.model';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.css']
})
export class UserChoiceComponent implements OnInit {

  colorList: Array<string> = ["green","black", "purple", "blue","yellow","red","gray"];

  buttonDisplay: Array<string> = ["green","black", "purple", "", "blue","yellow","red","","reset","gray","valider"];
 // buttonDisplay: Array<string> = ["green","black", "", "purple", "blue","","reset","valider"];

  @Input()
  combinaisonWinner: Combinaison = {};
  @Input()
  gameStart: boolean = false;

  combinaisonPlayer : Combinaison = {};
  billeList: Bille[] = [];

  @Input()
  nbreBille: number = 4;

  @Output()
  combinaisonPlayerList = new EventEmitter<Combinaison>();

  constructor() { }

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
