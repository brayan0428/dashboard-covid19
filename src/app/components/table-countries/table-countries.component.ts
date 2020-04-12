import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-table-countries",
  templateUrl: "./table-countries.component.html",
  styleUrls: ["./table-countries.component.css"],
})
export class TableCountriesComponent implements OnInit {
  @Input() data;

  dataSource;
  displayedColumns: string[] = [
    "Country",
    "TotalConfirmed",
    "TotalRecovered",
    "TotalDeaths",
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    console.log(this.dataSource);
  }

  applyFilter(event) {
    const value = event.target.value;
    console.log(value);
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
