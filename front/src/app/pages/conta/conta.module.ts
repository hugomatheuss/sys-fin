import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { ContaComponent } from './conta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContaService } from 'src/app/services/conta.service';
import { ContaFormComponent } from './conta-form/conta-form.component';
import { RouterModule } from '@angular/router';
import { ContaListComponent } from './conta-list/conta-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContaComponent,
    ContaFormComponent,
    ContaListComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContaService]
})
export class ContaModule { }
