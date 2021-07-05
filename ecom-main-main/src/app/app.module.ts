import { AuthGuardGuard } from './guard/auth-guard.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatModule } from './material/mat/mat.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddressComponent } from './components/address/address.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { AddressDialogComponent } from './components/address-dialog/address-dialog.component';
import { DealsComponent } from './components/deals/deals.component';
import { QueriesComponent } from './components/queries/queries.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DataTablesModule } from "angular-datatables";
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    WishListComponent,
    ProductDetailsComponent,
    AddressComponent,
    UserProfileComponent,
    SummaryComponent,
    ContactUsComponent,
    ThankyouComponent,
    AddressDialogComponent,
    DealsComponent,
    QueriesComponent,
    UploadImageComponent,
    UserProfileEditComponent,
    CalendarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ScheduleModule,
    DataTablesModule
  ],
  providers: [AuthGuardGuard,
    /* WeekService,
    MonthService */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
