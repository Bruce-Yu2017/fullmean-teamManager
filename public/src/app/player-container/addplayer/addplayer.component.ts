import { TeamManagerService } from './../../team-manager.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  players = [];
  player = {
    name: "",
    position: ""
  }
  constructor(private _player: TeamManagerService, private _router: Router) { }

  onSubmit() {
    this._player.create(this.player);
    this._router.navigate(['player', 'list']);
    this.player = {
      name: "",
      position: ""
    }
  }

  ngOnInit() {
  }

}
