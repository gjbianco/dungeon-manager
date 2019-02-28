import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { HomeComponent } from './home/home.component';
import { InitiativeDisplayComponent } from './initiative-display/initiative-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    DiceRollerComponent,
    HomeComponent,
    InitiativeDisplayComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
