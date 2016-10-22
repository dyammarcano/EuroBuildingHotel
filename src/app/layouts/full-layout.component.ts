import { Component } from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {

  public Cyear: string = `2008-${ new Date().getFullYear() } Bayco C,A.`;
  public Curl: string = "http://www.bayco-inc.com";

  constructor() { }

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
      console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
      $event.preventDefault();
      $event.stopPropagation();
      this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void { }
}
