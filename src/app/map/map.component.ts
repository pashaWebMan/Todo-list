import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  public map: google.maps.Map;
  @Input() latitude;
  @Input() longitude;

  constructor() { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
  }
  

}
