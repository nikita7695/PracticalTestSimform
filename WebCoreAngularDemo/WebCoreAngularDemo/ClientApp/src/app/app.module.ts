import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product-list/product-list.component';
import { AddProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, HomeComponent, ProductComponent, AddProductComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }), HttpClientModule, FormsModule,
  RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'product-list', component: ProductComponent },
    { path: 'product/Add', component: AddProductComponent },
    { path: 'product/Edit/:id', component: AddProductComponent }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
