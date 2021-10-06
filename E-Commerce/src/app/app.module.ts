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


import { CartComponent } from './components/cart/cart.component';

import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { DataTablesModule } from "angular-datatables";
import { MonthService, ScheduleModule, WeekService } from '@syncfusion/ej2-angular-schedule';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { NgxSpinnerModule } from "ngx-spinner"; 





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,

 
    CartComponent,

    ProductDetailsComponent
  

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
    DataTablesModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxSpinnerModule  

  ],
  providers: [AuthGuardGuard,
    WeekService,
    MonthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
