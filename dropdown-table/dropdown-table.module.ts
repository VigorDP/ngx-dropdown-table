import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { DropdownTableComponent } from "./component";

@NgModule({
  imports: [NgZorroAntdModule, CommonModule, FormsModule],
  declarations: [DropdownTableComponent],
  exports: [DropdownTableComponent]
})
export class NgxDropdownTableModule {}
