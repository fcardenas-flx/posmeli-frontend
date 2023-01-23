import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';

import { GetInventoryComponent } from './component/inventory/get-inventory/get-inventory.component';

import { AddSaleComponent } from './component/sales/add-sale/add-sale.component';

const routes: Routes = [

  //home
	{path: "", redirectTo: "home", pathMatch: 'full'},
	{path: "home", component: HomeComponent},
  
  //inventory
	{path: "inventory", component: GetInventoryComponent},

  //Sales
  {path: "sale/add", component: AddSaleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
