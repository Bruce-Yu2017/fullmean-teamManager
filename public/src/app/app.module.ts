import { TeamManagerService } from './team-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { PlayerlistComponent } from './player-container/playerlist/playerlist.component';
import { AddplayerComponent } from './player-container/addplayer/addplayer.component';
import { GameContainerComponent } from './game-container/game-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerContainerComponent,
    PlayerlistComponent,
    AddplayerComponent,
    GameContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [TeamManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
