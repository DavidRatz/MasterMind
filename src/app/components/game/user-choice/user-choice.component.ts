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

  // form: FormGroup = new FormGroup({
  //   'color1': new FormControl(),
  //   'color2': new FormControl(),
  //   'color3': new FormControl(),
  //   'color4': new FormControl(),
  // })

  i: number = 1

  colorList: Array<string> = ["green","black", "purple", "blue","yellow","red","gray"];

  buttonDisplay: Array<string> = ["green","black", "purple", "", "blue","yellow","red","","reset","gray","valider"];
 // buttonDisplay: Array<string> = ["green","black", "", "purple", "blue","","reset","valider"];

  // combinaisonPlayer : Combinaison = {
  //   color1: '',
  //   color2: '',
  //   color3: '',
  //   color4: '',
  // };

  @Input()
  combinaisonWinner: Combinaison = {};

  //userChoiceList: Array<string> = [];

  combinaisonPlayer : Combinaison = {};
  billeList: Bille[] = [];

  nbrColor: number = 5;

  // color1: string = "";
  // color2: string = "";
  // color3: string = "";
  // color4: string = "";

  @Output()
  combinaisonPlayerList = new EventEmitter<Combinaison>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){    
    // const formValue = this.form.value;
    // console.log(formValue);
    
    // console.log(formValue["color1"]);
    
    //let combinaisonPlayer : Combinaison = {};

    
    

    // let combinaisonPlayer : Combinaison = {
    // color1 : formValue["color1"],
    // color2 : formValue["color2"],
    // color3 : formValue["color3"],
    // color4 : formValue["color4"]
    // };

    
    
    this.combinaisonPlayerList.emit(this.combinaisonPlayer);

    this.onReset()
  }

  

  onReset(){
    this.combinaisonPlayer = {};
    this.billeList = [];
  }

  addColor(color: string){
    if(this.billeList.length < this.nbrColor){
      let bille: Bille = {
        color: color
      }
      this.billeList.push(bille);
    }
    
    this.combinaisonPlayer.bille = this.billeList;

    
    // if(this.userChoiceList.length != this.nbrColor)
    //   this.userChoiceList.push(color);
    // switch (this.i) {
    //   case 1:
    //     this.color1 = color;
    //     this.form.get("color1")?.setValue(this.color1);
    //     break;
    //   case 2:
    //     this.color2 = color;
    //     this.form.get("color2")?.setValue(this.color2);
    //     break;
    //   case 3:
    //     this.color3 = color;
    //     this.form.get("color3")?.setValue(this.color3);
    //     break;
    //   case 4:
    //     this.color4 = color;
    //     this.form.get("color4")?.setValue(this.color4);
    //     break;
    //   default:
    //     break;
    // }

    // this.i++;
  }
  
}
