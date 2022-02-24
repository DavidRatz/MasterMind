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

  /**
   *
   */
  constructor() {
    
  }

  ngOnInit(): void {
      
  }
}
