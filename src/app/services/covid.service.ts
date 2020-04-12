import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { retry } from "rxjs/operators";
const URL_API = "https://api.covid19api.com";

@Injectable({
  providedIn: "root",
})
export class CovidService {
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get(`${URL_API}/summary`).pipe(retry(1));
  }
}
