import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
import { SmallNotificationPageComponent } from './small-notification-page/small-notification-page.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { LargeNotificationComponent } from './large-notification/large-notification.component';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { SharedModule } from '../shared.module';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';
import { HomeComponent } from './home/home.component';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';

@NgModule({
  declarations: [
    SmallNotificationPageComponent,
    PasswordInputComponent,
    LargeNotificationComponent,
    DropdownButtonComponent,
    PlanSelectorComponent,
    HomeComponent,
    HamburguerButtonComponent
  ],
  imports: [
    SharedModule,
    ComponentsRoutingModule
  ],
  providers: [],
  bootstrap: [ComponentsModule]
})
export class ComponentsModule { }
