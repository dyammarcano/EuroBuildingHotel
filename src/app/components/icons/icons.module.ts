import { NgModule } from '@angular/core';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { IconsRoutingModule } from './icons.routing';


@NgModule({
    imports: [
      IconsRoutingModule
    ],
    declarations: [
        FontAwesomeComponent,
        SimpleLineIconsComponent,
    ]
})
export class IconsModule { }
