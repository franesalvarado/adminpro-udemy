import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import {
    SharedService,
    SidebarService,
    SettingsService
   } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService,
    SettingsService
  ],
  declarations: []
})
export class ServiceModule { }
