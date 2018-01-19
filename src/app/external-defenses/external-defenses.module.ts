import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TieFighterComponent,
    StarDestroyerComponent
  ],
  declarations: [
    TieFighterComponent,
    StarDestroyerComponent
  ]
})
export class ExternalDefensesModule { }
