import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {ChipModule} from 'primeng/chip';
import {TagModule} from 'primeng/tag';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {SidebarModule} from 'primeng/sidebar';



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
    InputTextModule,
    CardModule,
    BadgeModule,
    ChartModule,
    TableModule,
    ChipModule,
    TagModule,
    RadioButtonModule,
    MultiSelectModule,
    SidebarModule,
    DropdownModule,
    EditorModule
  ]
})
export class PrimeNgModule { }
