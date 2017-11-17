import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
@Injectable()
export class TeamManagerService {

  constructor(private _http: Http) { }

  retrieve(callback) {
    this._http.get("http://localhost:8000/player").subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  create(data) {
    this._http.post("http://localhost:8000/player", data).subscribe(
      (res) => {
        console.log(res.json());
        console.log("success create");
        
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deletePlayer(id) {
    this._http.delete("http://localhost:8000/player/destroy/" + id).subscribe(
      (res) => {
        console.log("success delete");
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
