import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent }         from './buttons/buttons.component';
import { CardsComponent }           from './cards/cards.component';
import { FormsComponent }           from './forms/forms.component';
import { SocialButtonsComponent }   from './social/social-buttons.component';
import { SwitchesComponent }        from './switches/switches.component';
import { TablesComponent }          from './tables/tables.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Components'
        },
        children: [
            {
                path: 'buttons',
                component: ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'cards',
                component: CardsComponent,
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: FormsComponent,
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'social-buttons',
                component: SocialButtonsComponent,
                data: {
                    title: 'Social buttons'
                }
            },
            {
                path: 'switches',
                component: SwitchesComponent,
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: TablesComponent,
                data: {
                    title: 'Tables'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRouting {}
