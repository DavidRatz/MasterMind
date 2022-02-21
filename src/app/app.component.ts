import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Combinaison } from './models/combinaison.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MasterMind';
  form: FormGroup = new FormGroup({
    'color1': new FormControl(),
    'color2': new FormControl(),
    'color3': new FormControl(),
    'color4': new FormControl(),
  })

  i: number = 1

  colorList: Array<string> = ["green","black", "purple", "blue","yellow","red","gray"];

  // combinaisonPlayer : Combinaison = {
  //   color1: '',
  //   color2: '',
  //   color3: '',
  //   color4: '',
  // };

  combinaisonList: Combinaison[] = [];

  combinaisonWinner: Combinaison = {
    color1: '',
    color2: '',
    color3: '',
    color4: ''
  };

  color1: string = "";
  color2: string = "";
  color3: string = "";
  color4: string = "";

  bcStatusColor1: string = "";
  bcStatusColor2: string = "";
  bcStatusColor3: string = "";
  bcStatusColor4: string = "";

  ngOnInit(): void {      
      this.combinaisonWinner.color1 = this.colorList[this.getRandomInt(7)];
      this.combinaisonWinner.color2 = this.colorList[this.getRandomInt(7)];
      this.combinaisonWinner.color3 = this.colorList[this.getRandomInt(7)];
      this.combinaisonWinner.color4 = this.colorList[this.getRandomInt(7)];    
      console.log(this.combinaisonWinner);
        
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  onSubmit(){    
    console.log(this.form.value);
    const formValue = this.form.value;
    let combinaisonPlayer : Combinaison = {
    color1 : formValue["color1"],
    color2 : formValue["color2"],
    color3 : formValue["color3"],
    color4 : formValue["color4"]
    };
    console.log(combinaisonPlayer);
    
    if (combinaisonPlayer.color1 === this.combinaisonWinner.color1) {
      this.bcStatusColor1 = "green";
    } else if (combinaisonPlayer.color1 === this.combinaisonWinner.color2 || combinaisonPlayer.color1 === this.combinaisonWinner.color3 || combinaisonPlayer.color1 === this.combinaisonWinner.color4) {
      this.bcStatusColor1 = "yellow";
    } 
    else{
      this.bcStatusColor1 = "red";
    }
    combinaisonPlayer.bcStatusColor1 = this.bcStatusColor1;

    if (combinaisonPlayer.color2 === this.combinaisonWinner.color2) {
      this.bcStatusColor2 = "green";
    } else if (combinaisonPlayer.color2 === this.combinaisonWinner.color1 || combinaisonPlayer.color2 === this.combinaisonWinner.color3 || combinaisonPlayer.color2 === this.combinaisonWinner.color4) {
      this.bcStatusColor2 = "yellow";
    } 
    else{
      this.bcStatusColor2 = "red";
    } 
    combinaisonPlayer.bcStatusColor2 = this.bcStatusColor2;

    if (combinaisonPlayer.color3 === this.combinaisonWinner.color3) {
      this.bcStatusColor3 = "green";
    } else if (combinaisonPlayer.color3 === this.combinaisonWinner.color1 || combinaisonPlayer.color3 === this.combinaisonWinner.color2 || combinaisonPlayer.color3 === this.combinaisonWinner.color4) {
      this.bcStatusColor3 = "yellow";
    } 
    else{
      this.bcStatusColor3 = "red";
    } 
    combinaisonPlayer.bcStatusColor3 = this.bcStatusColor3;

    if (combinaisonPlayer.color4 === this.combinaisonWinner.color4) {
      this.bcStatusColor4 = "green";
    } else if (combinaisonPlayer.color4 === this.combinaisonWinner.color1 || combinaisonPlayer.color4 === this.combinaisonWinner.color2 || combinaisonPlayer.color4 === this.combinaisonWinner.color3) {
      this.bcStatusColor4 = "yellow";
    } 
    else{
      this.bcStatusColor4 = "red";
    }
    combinaisonPlayer.bcStatusColor4 = this.bcStatusColor4;
    
    this.combinaisonList.push(combinaisonPlayer);

    if(combinaisonPlayer.color1 === this.combinaisonWinner.color1 && combinaisonPlayer.color2 === this.combinaisonWinner.color2 && combinaisonPlayer.color3 === this.combinaisonWinner.color3 && combinaisonPlayer.color4 === this.combinaisonWinner.color4)
      alert("Vous avez gagné !")
    
    this.onReset()
  }

  onRestart(){
    this.combinaisonList = [];
  }

  onReset(){
    this.i=1;
    this.color1 = "";
    this.color2 = "";
    this.color3 = "";
    this.color4 = "";
  }

  addColor(color: string){
    switch (this.i) {
      case 1:
        this.color1 = color;
        this.form.get("color1")?.setValue(this.color1);
        break;
      case 2:
        this.color2 = color;
        this.form.get("color2")?.setValue(this.color2);
        break;
      case 3:
        this.color3 = color;
        this.form.get("color3")?.setValue(this.color3);
        break;
      case 4:
        this.color4 = color;
        this.form.get("color4")?.setValue(this.color4);
        break;
      default:
        break;
    }

    this.i++;
  }
}
