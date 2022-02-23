import { Component, OnInit } from '@angular/core';
import { Combinaison } from 'src/app/models/combinaison.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // combinaisonPlayerList: Combinaison[] = [];
  combinaisonPlayerList: Combinaison = {};

  submit: boolean = false;

  combinaisonWinner: Combinaison = {};

  colorList: Array<string> = ["green","black", "purple", "blue","yellow","red","gray"];
  constructor() { }

  ngOnInit(): void {
    this.getCombinaisonWinner()
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getCombinaisonWinner(){
    this.combinaisonWinner.color1 = this.colorList[this.getRandomInt(7)];
    this.combinaisonWinner.color2 = this.colorList[this.getRandomInt(7)];
    this.combinaisonWinner.color3 = this.colorList[this.getRandomInt(7)];
    this.combinaisonWinner.color4 = this.colorList[this.getRandomInt(7)];    
  }

  // getCombinaisonPlayerList(combinaison: Combinaison[]){
  //   this.combinaisonPlayerList = combinaison;
  // }
  getCombinaisonPlayerList(combinaison: Combinaison){
    this.combinaisonPlayerList = combinaison;
  }

  submitCheck(){
    this.submit = true;
  }
}
