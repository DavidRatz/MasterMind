import { Component, Input, OnInit } from '@angular/core';
import { Combinaison } from 'src/app/models/combinaison.model';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  @Input()
  combinaisonWinner: Combinaison = {};
  @Input()
  partieFinie: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
