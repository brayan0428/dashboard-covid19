import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { CovidService } from "./services/covid.service";
import { TableCountriesComponent } from './components/table-countries/table-countries.component';

@NgModule({
  declarations: [AppComponent, TableCountriesComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [CovidService],
  bootstrap: [AppComponent],
})
export class AppModule {}
