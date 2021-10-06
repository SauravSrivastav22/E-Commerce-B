/* import { SummaryComponent } from './components/summary/summary.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddressComponent } from './components/address/address.component'; */
import { AuthGuardGuard } from './guard/auth-guard.guard';
/* import { WishListComponent } from './components/wish-list/wish-list.component'; */
import { CartComponent } from './components/cart/cart.component';


import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { ProductsComponent } from './components/products/products.component'; */
import { ProductDetailsComponent } from './components/product-details/product-details.component';
/* import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { DealsComponent } from './components/deals/deals.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { QueriesComponent } from './components/queries/queries.component';
import { GridsterComponent } from './components/gridster/gridster.component'; */


const routes: Routes = [
  {
    // http://localhost:4200
    path:"",component:HomeComponent
  },
  
 {
    path:"cart",component:CartComponent 
  },
 
  {
    // http://localhost:4200/product-details/
    path:"product-details/:id",component:ProductDetailsComponent
  },
  
  {
    path:"**" , redirectTo:""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
