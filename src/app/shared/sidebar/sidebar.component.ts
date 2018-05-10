import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [ SidebarService ],
  styles: []
})
export class SidebarComponent implements OnInit {

  public menuService: any;
  constructor( _sidebar: SidebarService ) {
    this.menuService = _sidebar.menu;
  }

  ngOnInit() {
  }

}
