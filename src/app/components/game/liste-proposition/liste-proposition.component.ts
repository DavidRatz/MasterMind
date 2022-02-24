import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Combinaison } from 'src/app/models/combinaison.model';

@Component({
  selector: 'app-liste-proposition',
  templateUrl: './liste-proposition.component.html',
  styleUrls: ['./liste-proposition.component.css']
})
export class ListePropositionComponent implements OnInit {

  @Input()
  combinaisonPlayerList: Combinaison[] = [];
  
  constructor() { }

  ngOnInit(): void {    
  }


}
