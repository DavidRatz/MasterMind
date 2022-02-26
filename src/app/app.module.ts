import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { UserChoiceComponent } from './components/game/user-choice/user-choice.component';
import { SolutionComponent } from './components/game/solution/solution.component';
import { ListePropositionComponent } from './components/game/liste-proposition/liste-proposition.component';
import { ConfigurationComponent } from './components/game/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    UserChoiceComponent,
    SolutionComponent,
    ListePropositionComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
