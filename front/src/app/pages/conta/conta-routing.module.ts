import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaFormComponent } from './conta-form/conta-form.component';
import { ContaListComponent } from './conta-list/conta-list.component';
import { ContaComponent } from './conta.component';

const routes: Routes = [
  {
    path: '',
    component: ContaComponent,
    children: [
      {
        path: '',
        component: ContaListComponent
      },
      {
        path: 'form-conta',
        component: ContaFormComponent
      },
      {
        path: 'form-conta/:id',
        component: ContaFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
