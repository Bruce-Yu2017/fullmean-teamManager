import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
@Injectable()
export class TeamManagerService {

  constructor(private _http: Http) { }

  retrieve(callback) {
    this._http.get("/player").subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  create(data) {
    this._http.post("/player", data).subscribe(
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
    this._http.delete("/player/destroy/" + id).subscribe(
      (res) => {
        console.log("success delete");
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
