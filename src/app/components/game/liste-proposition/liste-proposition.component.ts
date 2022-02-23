import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Combinaison } from 'src/app/models/combinaison.model';

@Component({
  selector: 'app-liste-proposition',
  templateUrl: './liste-proposition.component.html',
  styleUrls: ['./liste-proposition.component.css']
})
export class ListePropositionComponent implements OnInit {

  // @Input()
  // combinaisonPlayerList: Combinaison[] = [];

  combinaisonPlayerList: Combinaison[] = [];
  
  

  @Input()
  userChoice: Combinaison = {
    color1: "",
    color2: "",
    color3: "",
    color4: "",
  };

  bcStatusColor1: string = "";
  bcStatusColor2: string = "";
  bcStatusColor3: string = "";
  bcStatusColor4: string = "";

  @Input()
  combinaisonWinner: Combinaison = {};
  
  @Input()
  submitted: boolean = false;
  @Output()
  submittedChange = new EventEmitter<boolean>();
  
  
  
  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {    
  }

  test(){
    console.log(this.submitted);
    
    if (this.userChoice.color1 === this.combinaisonWinner.color1) {
      this.bcStatusColor1 = "green";
    } else if (this.userChoice.color1 === this.combinaisonWinner.color2 || this.userChoice.color1 === this.combinaisonWinner.color3 || this.userChoice.color1 === this.combinaisonWinner.color4) {
      this.bcStatusColor1 = "yellow";
    } 
    else{
      this.bcStatusColor1 = "red";
    }
    this.userChoice.bcStatusColor1 = this.bcStatusColor1;

    if (this.userChoice.color2 === this.combinaisonWinner.color2) {
      this.bcStatusColor2 = "green";
    } else if (this.userChoice.color2 === this.combinaisonWinner.color1 || this.userChoice.color2 === this.combinaisonWinner.color3 || this.userChoice.color2 === this.combinaisonWinner.color4) {
      this.bcStatusColor2 = "yellow";
    } 
    else{
      this.bcStatusColor2 = "red";
    } 
    this.userChoice.bcStatusColor2 = this.bcStatusColor2;

    if (this.userChoice.color3 === this.combinaisonWinner.color3) {
      this.bcStatusColor3 = "green";
    } else if (this.userChoice.color3 === this.combinaisonWinner.color1 || this.userChoice.color3 === this.combinaisonWinner.color2 || this.userChoice.color3 === this.combinaisonWinner.color4) {
      this.bcStatusColor3 = "yellow";
    } 
    else{
      this.bcStatusColor3 = "red";
    } 
    this.userChoice.bcStatusColor3 = this.bcStatusColor3;

    if (this.userChoice.color4 === this.combinaisonWinner.color4) {
      this.bcStatusColor4 = "green";
    } else if (this.userChoice.color4 === this.combinaisonWinner.color1 || this.userChoice.color4 === this.combinaisonWinner.color2 || this.userChoice.color4 === this.combinaisonWinner.color3) {
      this.bcStatusColor4 = "yellow";
    } 
    else{
      this.bcStatusColor4 = "red";
    }
    this.userChoice.bcStatusColor4 = this.bcStatusColor4;
    
    this.combinaisonPlayerList.push(this.userChoice);

    this.submitted = false;
    
    //this.submittedChange.emit(this.submitted);
    this.cdref.detectChanges();
    console.log(this.submitted);
  }

  ngOnChanges(changes: any) {
    console.log(changes);
    
  }


}
