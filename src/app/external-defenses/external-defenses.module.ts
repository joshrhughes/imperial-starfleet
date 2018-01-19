import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TieFighterComponent } from './tie-fighter/tie-fighter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TieFighterComponent
  ],
  declarations: [
    TieFighterComponent
  ]
})
export class ExternalDefensesModule { }
