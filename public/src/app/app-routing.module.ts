import { PlayerlistComponent } from './player-container/playerlist/playerlist.component';
import { TeamManagerService } from './team-manager.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { AddplayerComponent } from './player-container/addplayer/addplayer.component';

const routes: Routes = [
  {path: "", redirectTo: "player/list", pathMatch:"full"},
  {path: "player", component: PlayerContainerComponent, children: [
    {path: "list", component: PlayerlistComponent},
    {path: "addplayer", component: AddplayerComponent}
  ]},
  {path: "**", redirectTo: "/player/list"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
