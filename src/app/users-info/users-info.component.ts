import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  public users;
  public searchField;

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => this.users = data);
  }

}
