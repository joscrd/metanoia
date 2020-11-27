// Rutes and providers
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project components
import { HomeComponent } from './components/home/home.component';
import { RadioComponent } from './components/radio/radio.component';
import { TeachComponent } from './components/teach/teach.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

// This array contains the component routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'radio', component: RadioComponent},
    {path: 'teach', component: TeachComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);