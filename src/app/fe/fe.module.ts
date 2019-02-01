import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeComponent } from './fe/fe.component';
import { FESelectComponent } from './feselect/feselect.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feReducer } from './state/fe.reducers';
import { FeEffects } from './state/fe.effects';

const routes: Routes = [
  { path: '', component: FESelectComponent },
  { path: ':id', component: FeComponent }
];

@NgModule({
  declarations: [FeComponent, FESelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('fes', feReducer),
    EffectsModule.forFeature([FeEffects])
  ]
})
export class FeModule {}
