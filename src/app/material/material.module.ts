import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule],
  exports: [MatTableModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
