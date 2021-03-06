import { Directive, HostListener } from '@angular/core';
import { StorageService } from './services';


@Directive({
    selector: '.sidebar-toggle',
})
export class SidebarToggleDirective {

    constructor(private _storage: StorageService) { }

    //Check if element has class
    private hasClass(target: any, elementClassName: string) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }

    //Toggle element class
    private toggleClass(elem: any, elementClassName: string) {
        let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
                newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + elementClassName;
        }
    }

    @HostListener('click', ['$event'])
    toggleOpen($event: any) {
        $event.preventDefault();

        let bodyClass = this._storage.load('body-class');

        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
            this.toggleClass(document.querySelector('html'), 'sidebar-opened');
        } else if (this.hasClass(document.querySelector('body'), 'sidebar-nav') || bodyClass == 'sidebar-nav') {
            this.toggleClass(document.querySelector('body'), 'sidebar-nav');
            this._storage.save('body-class', 'sidebar-nav');
            if (bodyClass == 'sidebar-nav') {
                this._storage.erase('body-class');
            }
        }
    }
}

@Directive({
    selector: '[mobile-nav-toggle]',
})
export class MobileSidebarToggleDirective {
    constructor() { }

    //Check if element has class
    private hasClass(target: any, elementClassName: string) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }

    //Toggle element class
    private toggleClass(elem: any, elementClassName: string) {
        let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
                newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + elementClassName;
        }
    }

    @HostListener('click', ['$event'])
    toggleOpen($event: any) {
        $event.preventDefault();

        this.toggleClass(document.querySelector('body'), 'mobile-open');

        console.log('asdasdasd');
    }
}

/**
* Allows the off-canvas sidebar to be closed via click.
*/
@Directive({
    selector: '.sidebar-close',
})
export class SidebarOffCanvasCloseDirective {
    constructor() { }

    //Check if element has class
    private hasClass(target:any, elementClassName:string) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }

    //Toggle element class
    private toggleClass(elem:any, elementClassName:string) {
        let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
                newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + elementClassName;
        }
    }

    @HostListener('click', ['$event'])
    toggleOpen($event:any) {
        $event.preventDefault();

        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    }
}

export const SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
