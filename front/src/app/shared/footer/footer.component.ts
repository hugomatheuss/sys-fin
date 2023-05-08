import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  labelFooter: string = 'Hugo Matheus';
  contato: string = '(81) 8961-7916';

  constructor() { }

  ngOnInit(): void {
  }


}
