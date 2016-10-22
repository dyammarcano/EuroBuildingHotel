import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { SocialButtonsComponent } from './social/social-buttons.component';
import { SwitchesComponent } from './switches/switches.component';
import { TablesComponent } from './tables/tables.component';
import { ComponentsRouting } from './components.routing';


@NgModule({
    imports: [
      ComponentsRouting
    ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
    ]
})
export class ComponentsModule { }
