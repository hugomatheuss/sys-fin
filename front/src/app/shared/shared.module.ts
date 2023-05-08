import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { LoginService } from '../services/login.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ListComponent,
    CardComponent
  ],
  providers: [LoginService]
})
export class SharedModule { }
