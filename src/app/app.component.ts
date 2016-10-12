import './app.loader.ts';
import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { StartupService } from './shared';
import { SocketService } from 'angular2-socket-client';
import { BaThemeConfig } from './theme/theme.config';
import { app, BrowserWindow } from 'electron';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'), require('./app.scss')
  ],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

  isMenuCollapsed : boolean = false;

  constructor(
    private _state : GlobalState,
    private _imageLoader : BaImageLoaderService,
    private _spinner : BaThemeSpinner,
    private _config : BaThemeConfig,
    private startupService : StartupService
  ) {

    this
      .startupService
      .get('message')
      .subscribe((data) => {
        console.log(`message: ${data}`);
      });

    this._loadImages();

    this
      ._state
      .subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
      });
  }

  ngOninit() {}

  ngOnDestroy() {}

  public ngAfterViewInit() : void {
    // hide spinner once all loaders are completed
    BaThemePreloader
      .load()
      .then((values) => {
        this
          ._spinner
          .hide();
      });
  }

  private _loadImages() : void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
