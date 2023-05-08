import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.scss']
})
export class ContaFormComponent implements OnInit {

  title: string = '';
  form: UntypedFormGroup;
  private id?: number;
  private isEditar: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private service: ContaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.form = this.fb.group({
      id: [''],
      fornecedor: ['', Validators.required], 
      valor: ['', Validators.required], 
      descricao: [''],
      status: [''],
      tipo: ['', Validators.required],
      numeroDocumento: [''],
      dataPagamento: [''],
      dataVencimento: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.title = 'Adicionar Conta';
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.id = params['id'];
        this.isEditar = true;
        this.title = 'Editar Conta';
        this.getConta();
      }
    });
  }

  getConta() {
    if(this.id) {
      this.service.getConta(this.id).subscribe((res) => {
        if(res.data) {
          delete res.created_at;
          delete res.updated_at;
          this.form.setValue(res.data);
        }
      })
    }
  }
  

  goBack(): void {
    this.location.back();
  }

  salvaConta(): void {
    if(this.form.valid) {
      if(this.isEditar) {
        this.service.editarConta(this.form.value).subscribe((res) => {
          if(res) {
            this.router.navigateByUrl('/conta');
          }
        })
      } else {
        this.service.salvarConta(this.form.value).subscribe((res) => {
          if(res) {
            this.router.navigateByUrl('/conta');
          }
        })
      }
    }
  }

}
