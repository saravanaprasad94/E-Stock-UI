import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() togglefromcomponents: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {}

  toggleSideBar(){
    this.togglefromcomponents.emit()

  }
  navigateToLogin(){
    console.log("logout")
    this.router.navigate(['/']);
  }

}
