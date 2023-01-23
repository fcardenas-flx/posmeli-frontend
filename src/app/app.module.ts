import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { GetInventoryComponent } from './component/inventory/get-inventory/get-inventory.component';
import { AddSaleComponent } from './component/sales/add-sale/add-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetInventoryComponent,
    AddSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
