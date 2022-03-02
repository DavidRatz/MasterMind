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

  combinaisonWinner: Combinaison = {};

  colorList: Array<string> = ["green","black", "purple", "blue","yellow","red","gray"];


  // nbreColor: number = 4;
  nbreBille: number = 4;
  nbreEssaiTotal: number = 4;
  nbreEssai: number = 0;

  gagne: boolean = false;
  partieFinie: boolean = false;

  displayConfiguration: boolean = true;
  gameStart: boolean = false;
  restart: boolean = false;

  combinaisonWinnerADonner: boolean = false;
  nbJoueur: number = 1;

  nbColor: number = 7;

  constructor() {}

  ngOnInit(): void {    
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getCombinaisonWinner(){
    let bille: Bille;
    let billeList: Bille[] = [];
    console.log(this.nbreBille);
    
    for (let i = 0; i < this.nbreBille; i++) {
      bille = {
        color: this.colorList[this.getRandomInt(this.nbColor)]
        
      }
      billeList.push(bille);
    }
    
    this.combinaisonWinner.bille = billeList   
    this.combinaisonWinnerADonner = false; 
  }

  getCombinaisonPlayerList(combinaison: Combinaison){
    console.log(combinaison);
    let nbrBilleCorrect = 0;
    if(this.combinaisonWinnerADonner && !this.gameStart){
      console.log(this.gameStart);
      
      this.combinaisonWinner = combinaison;
      this.combinaisonWinnerADonner = false;
      console.log(this.combinaisonWinner);
    }
    else{    
      if(!this.partieFinie){
        
        for (let i = 0; i < this.combinaisonWinner.bille!.length; i++) {
          this.combinaisonWinner.bille![i].backgroundColorStatus = undefined;
          combinaison.bille![i].backgroundColorStatus = undefined;
        }

        for (let i = 0; i < combinaison.bille!.length; i++) {
          if (combinaison.bille![i].color === this.combinaisonWinner.bille![i].color) {
            combinaison.bille![i].backgroundColorStatus = "green";
            this.combinaisonWinner.bille![i].backgroundColorStatus = "green";
            nbrBilleCorrect++;
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
        
        this.combinaisonPlayerList.push(combinaison);
        this.nbreEssai++;
        console.log(this.combinaisonPlayerList);
        
        // for (let i = 0; i < combinaison.bille!.length; i++) {
        //   const bille = combinaison.bille![i];
        //   if(bille.backgroundColorStatus == "green")
        //   {
        //     nbrBilleCorrect++;
        //   }
        // }
      }
      else {
        alert("Partie terminée !");
      }
      if(nbrBilleCorrect == this.nbreBille)
      {
        alert("Vous avez gagné !");
        this.partieFinie = true;
        //this.restart = true;
      }
      if(this.nbreEssai == this.nbreEssaiTotal && nbrBilleCorrect < this.nbreBille)
      {
        alert("Vous avez perdu !");
        this.partieFinie = true;
        //this.restart = true;
      }
    }
    
  }

  onRestart(){
    this.displayConfiguration = true;
    this.restart=false;
    this.combinaisonPlayerList = [];
    this.nbreEssai = 0;
    this.partieFinie = false;
    this.gagne = false;
    this.gameStart = false;
    if(this.nbJoueur != 1)
      this.combinaisonWinnerADonner = true;
    this.combinaisonWinner = {};
  }

  onStartGame(listeConfig: any){
    this.nbreBille = listeConfig['nbreBille'];
    this.nbreEssaiTotal = listeConfig['nbreEssaiTotal'];
    this.nbJoueur = listeConfig['nbJoueur'];
    this.nbColor = parseInt(listeConfig['nbColor']);
    console.log(this.nbColor);
    
    if(this.nbJoueur == 1)
        this.getCombinaisonWinner();
    
    if(!this.combinaisonWinnerADonner){
      this.displayConfiguration = false;
      this.gameStart = true;
      this.restart = true;
    }
   
  }

}
