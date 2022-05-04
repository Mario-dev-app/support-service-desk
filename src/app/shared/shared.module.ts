import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UpNavbarComponent } from './up-navbar/up-navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    UpNavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    SidebarComponent,
    UpNavbarComponent
  ]
})
export class SharedModule { }
