import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from 'src/app/model/conta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.scss']
})
export class ContaListComponent implements OnInit {

  title: string = 'Lista de Contas';
  listContas: Array<Conta> = [];
  

  constructor(
    private service: ContaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListContas();
  }

  getListContas(): void {
    this.service.getContas().subscribe((res) => {
        if (res.data) {
          this.listContas = res.data;
        }
    })
  }

  removeConta(id: number) {
    this.service.excluirConta(id).subscribe((res) => {
      if(res) {
        this.getListContas();
      }
    })
  }

  goToForm(id?: number): void {
    this.router.navigate([`conta/form-conta/${id?? ''}`]);
  }

}
