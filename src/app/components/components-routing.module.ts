import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { LargeNotificationComponent } from './large-notification/large-notification.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SmallNotificationPageComponent } from './small-notification-page/small-notification-page.component';
import { HomeComponent } from './home/home.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { PriceRangeSelectorComponent } from './price-range-selector/price-range-selector.component';
import { FixedPriceRangeSelectorComponent } from './fixed-price-range-selector/fixed-price-range-selector.component';

const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },

    { path: "inputs/password-input", component: PasswordInputComponent },

    { path: "notifications/small-notification", component: SmallNotificationPageComponent },
    { path: "notifications/large-notification", component: LargeNotificationComponent },

    { path: "buttons/dropdown-button", component: DropdownButtonComponent },
    { path: "buttons/hamburguer-button", component: HamburguerButtonComponent },

    { path: "selectors/plan-selector", component: PlanSelectorComponent },
    { path: "selectors/country-selector", component: CountrySelectorComponent },
    { path: "selectors/price-range-selector", component: PriceRangeSelectorComponent },
    { path: "selectors/fixed-price-range-selector", component: FixedPriceRangeSelectorComponent },

    { path: "forms/credit-card", component: CreditCardFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
