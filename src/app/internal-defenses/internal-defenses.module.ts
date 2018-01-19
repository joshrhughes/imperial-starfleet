import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ],
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ]
})
export class InternalDefensesModule { }
