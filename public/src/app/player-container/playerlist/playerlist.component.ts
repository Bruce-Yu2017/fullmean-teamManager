import { TeamManagerService } from './../../team-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  players;
  constructor(private _list: TeamManagerService) { }

  ngOnInit() {
    this._list.retrieve((res) => {
      this.players = res;
    })

  }

  delete(id) {
    this._list.deletePlayer(id);
    this._list.retrieve((res) => {
      this.players = res;
    })
  }



}
