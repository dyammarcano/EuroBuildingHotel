import { Component, ElementRef } from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';


@Component({
  selector: 'google-maps',
  stylesUrls: ['./google-maps.scss'],
  templateUrl: './google-maps.html',
})
export class MapsComponent {

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    GoogleMapsLoader.load((google) => {
      new google.maps.Map(el, {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }
}
