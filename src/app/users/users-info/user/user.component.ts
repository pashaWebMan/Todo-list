import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { User } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input("user") 
  user: User;

  @Input() index;

  public location;

  constructor(private httpService: HttpService) { }
  public isMapActive = false;

  ngOnInit() {
  }
  
  showMap() {
    this.isMapActive = !this.isMapActive;
  }
  func(e:string) {
    this.location = e;
    console.log(this.location);
  }


}
