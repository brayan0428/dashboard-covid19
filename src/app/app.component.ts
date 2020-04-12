import { Component, OnInit } from "@angular/core";
import { CovidService } from "./services/covid.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private covidService: CovidService) {}

  Global: any = {};
  Countries;
  existeError = false;

  ngOnInit() {
    this.covidService.getData().subscribe(
      (data: any) => {
        console.log(data);
        this.Global = data.Global;
        this.Countries = data.Countries;
        this.Countries = this.Countries.filter(
          (item) => item.TotalConfirmed > 0
        );
      },
      (error) => {
        this.existeError = true;
      }
    );
  }
}
