import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  public map: google.maps.Map;
  public position;
  public marker;
  @Input() latitude;
  @Input() longitude;
  @Output() changeLocation = new EventEmitter();

  constructor() { }

  ngOnInit() {
    var mapProperties = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
    this.map.addListener('click', (e) => {
      placeMarker(e.latLng, this.map);
    });
    var placeMarker = (position, map) => {
      if(this.marker) {
        this.marker.setMap(null);
      }
      this.marker = new google.maps.Marker({
          position: position,
          map: map
      });
      map.panTo(position);
      this.position = `${position.lat().toFixed(4)}, ${position.lng().toFixed(4)}`;
      this.changeLocation.emit(this.position)
    }
  }

}
