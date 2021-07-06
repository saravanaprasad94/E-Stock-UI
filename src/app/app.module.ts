import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginModule } from './login/login.module';
// import { AddStockComponent } from './layouts/add-stock/add-stock.component';
// import { AddCompanyComponent } from './layouts/add-company/add-company.component';


@NgModule({
  declarations: [
    AppComponent,
    // AddStockComponent,
    // AddCompanyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
