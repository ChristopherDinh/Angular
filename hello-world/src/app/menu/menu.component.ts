import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems: Menu[] = [
        new Menu('Home', '/home', 'This is the Home menu item'),
		new Menu('Ball', '/ball-list', 'This is the Ball menu item'),
        new Menu('About', '/about', 'This is the About menu item')
    ];
  constructor() { }

  ngOnInit() {
  }

}
