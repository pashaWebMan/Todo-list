import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  public isMobileNavActive = false;
  public isAuthorised = false;

  constructor() { }

  ngOnInit() {
    localStorage.setItem("password", "asdfasdf");
    localStorage.setItem("login", "pashaboiko");
  }
  showMobileNav() {
    this.isMobileNavActive = !this.isMobileNavActive;
  }

}
