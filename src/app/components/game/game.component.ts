import { Component, OnInit } from '@angular/core';
import { Bille } from 'src/app/models/bille.model';
import { Combinaison } from 'src/app/models/combinaison.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  combinaisonPlayerList: Combinaison[] = [];
  // combinaisonPlayerList: Combinaison = {};

  submit: boolean = false;

  combinaisonWinner: Combinaison = {};

  bcStatusColor1: string = "";
  bcStatusColor2: string = "";
  bcStatusColor3: string = "";
  bcStatusColor4: string = "";

  colorList: Array<string> = ["green","black", "purple", "blue","yellow","red","gray"];

  nbreColor: number = 4;
  nbreBille: number = 4;
  nbreEssaiTotal: number = 4;
  nbreEssai: number = 0;

  gagne: boolean = false;
  partieFinie: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.getCombinaisonWinner()
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getCombinaisonWinner(){
    let bille: Bille;
    let billeList: Bille[] = [];
    for (let i = 0; i < this.nbreColor; i++) {
      bille = {
        color: this.colorList[this.getRandomInt(7)]
        
      }
      billeList.push(bille);
    }
    
    this.combinaisonWinner.bille = billeList
    
    // this.combinaisonWinner.color1 = this.colorList[this.getRandomInt(7)];
    // this.combinaisonWinner.color2 = this.colorList[this.getRandomInt(7)];
    // this.combinaisonWinner.color3 = this.colorList[this.getRandomInt(7)];
    // this.combinaisonWinner.color4 = this.colorList[this.getRandomInt(7)];    
    // console.log(this.combinaisonWinner);
    
  }

  getCombinaisonPlayerList(combinaison: Combinaison){
    console.log(combinaison);
    let nbrBilleCorrect = 0;
    for (let i = 0; i < this.combinaisonWinner.bille!.length; i++) {
      this.combinaisonWinner.bille![i].backgroundColorStatus = undefined;
      combinaison.bille![i].backgroundColorStatus = undefined;
    }

    for (let i = 0; i < combinaison.bille!.length; i++) {
      if (combinaison.bille![i].color === this.combinaisonWinner.bille![i].color) {
        combinaison.bille![i].backgroundColorStatus = "green";
        this.combinaisonWinner.bille![i].backgroundColorStatus = "green";
      }
      else
        combinaison.bille![i].backgroundColorStatus = "red";
    }

    for (let i = 0; i < combinaison.bille!.length; i++) {
      if(combinaison.bille![i].backgroundColorStatus == "red"){
        let stop = false;
        for(let j = 0; j < this.combinaisonWinner.bille!.length; j++) {
          console.log(this.combinaisonWinner.bille![j].backgroundColorStatus);

          console.log(combinaison.bille![i].color);
          console.log(this.combinaisonWinner.bille![j].color);
          
          
          
          if (this.combinaisonWinner.bille![j].backgroundColorStatus == undefined && combinaison.bille![i].color === this.combinaisonWinner.bille![j].color && !stop) {
            combinaison.bille![i].backgroundColorStatus = "yellow";
            this.combinaisonWinner.bille![j].backgroundColorStatus = "yellow";
            stop = true;
          }
        }
      }
    }
    
    // if (combinaison.color1 === this.combinaisonWinner.color1) {
    //   this.bcStatusColor1 = "green";
    // } else if (combinaison.color1 === this.combinaisonWinner.color2 || combinaison.color1 === this.combinaisonWinner.color3 || combinaison.color1 === this.combinaisonWinner.color4) {
    //   this.bcStatusColor1 = "yellow";
    // } 
    // else{
    //   this.bcStatusColor1 = "red";
    // }
    // combinaison.bcStatusColor1 = this.bcStatusColor1;

    // if (combinaison.color2 === this.combinaisonWinner.color2) {
    //   this.bcStatusColor2 = "green";
    // } else if (combinaison.color2 === this.combinaisonWinner.color1 || combinaison.color2 === this.combinaisonWinner.color3 || combinaison.color2 === this.combinaisonWinner.color4) {
    //   this.bcStatusColor2 = "yellow";
    // } 
    // else{
    //   this.bcStatusColor2 = "red";
    // } 
    // combinaison.bcStatusColor2 = this.bcStatusColor2;

    // if (combinaison.color3 === this.combinaisonWinner.color3) {
    //   this.bcStatusColor3 = "green";
    // } else if (combinaison.color3 === this.combinaisonWinner.color1 || combinaison.color3 === this.combinaisonWinner.color2 || combinaison.color3 === this.combinaisonWinner.color4) {
    //   this.bcStatusColor3 = "yellow";
    // } 
    // else{
    //   this.bcStatusColor3 = "red";
    // } 
    // combinaison.bcStatusColor3 = this.bcStatusColor3;

    // if (combinaison.color4 === this.combinaisonWinner.color4) {
    //   this.bcStatusColor4 = "green";
    // } else if (combinaison.color4 === this.combinaisonWinner.color1 || combinaison.color4 === this.combinaisonWinner.color2 || combinaison.color4 === this.combinaisonWinner.color3) {
    //   this.bcStatusColor4 = "yellow";
    // } 
    // else{
    //   this.bcStatusColor4 = "red";
    // }
    // combinaison.bcStatusColor4 = this.bcStatusColor4;
    
    this.combinaisonPlayerList.push(combinaison);
    this.nbreEssai++;
    console.log(this.combinaisonPlayerList);
    
    for (let i = 0; i < combinaison.bille!.length; i++) {
      const bille = combinaison.bille![i];
      if(bille.backgroundColorStatus == "green")
      {
        nbrBilleCorrect++;
      }
    }

    if(nbrBilleCorrect == this.nbreBille)
    {
      alert("Vous avez gagné !")
      this.partieFinie = true;
    }

    if(this.nbreEssai == this.nbreEssaiTotal && nbrBilleCorrect < this.nbreBille)
    {
      alert("Vous avez perdu !")
      this.partieFinie = true;
    }
  }

  onRestart(){
    this.getCombinaisonWinner();
    this.combinaisonPlayerList = [];
    this.nbreEssai = 0;
    this.partieFinie = false;
    this.gagne = false;
  }
}
