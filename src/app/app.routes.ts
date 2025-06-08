import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
// import { ProductDetailComponent } from '';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
   // { path: 'product/:id', component: ProductDetailComponent },
];
