import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() removeConta: EventEmitter<number> = new EventEmitter();
  @Input() listContas: Array<any> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToForm(id?: number): void {
    this.router.navigate([`conta/form-pessoa/${id?? ''}`]);
  }

  /* getCategoriaLabel(categoria: string): string {
    switch (categoria) {
      case '1':
          return 'Admin'
        case '2':
          return 'Gerente'
        case '3':
          return 'Normal'
        default:
          return 'Sem categoria';
    }
  } */

  remove(id: number): void {
    this.removeConta.emit(id);
  }

}
