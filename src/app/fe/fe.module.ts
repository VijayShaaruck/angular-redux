import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeComponent } from './fe/fe.component';
import { FESelectComponent } from './feselect/feselect.component';

@NgModule({
  declarations: [FeComponent, FESelectComponent],
  imports: [
    CommonModule
  ]
})
export class FeModule { }
