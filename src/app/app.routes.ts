import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'contact', component: ContactComponent}
];
