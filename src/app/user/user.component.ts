import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Input() index;

  constructor(private httpService: HttpService) { }
  public isMapActive = false;

  ngOnInit() {
  }
  
  showMap() {
    this.isMapActive = !this.isMapActive;
  }


}
