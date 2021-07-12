import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    SharedModule,
  ]
})
export class CategorieModule { }
