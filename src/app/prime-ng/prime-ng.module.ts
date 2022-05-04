import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
