import { AuthGuardGuard } from './guard/auth-guard.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
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


import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { AddressDialogComponent } from './components/address-dialog/address-dialog.component';
/* 
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';

import { CommonModule } from '@angular/common'; */


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);



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

   /*  CommonModule, 
    ScheduleAllModule, 
    RecurrenceEditorAllModule,  
    NumericTextBoxAllModule, 
    TextBoxAllModule, 
    DatePickerAllModule, 
    TimePickerAllModule, 
    DateTimePickerAllModule, 
    CheckBoxAllModule, 
    ToolbarAllModule, 
    DropDownListAllModule, 
    ContextMenuAllModule, 
    MaskedTextBoxModule, 
    UploaderAllModule, 
    MultiSelectAllModule, 
    TreeViewModule, 
    ButtonAllModule, 
    DropDownButtonAllModule, 
    SwitchAllModule
 */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
