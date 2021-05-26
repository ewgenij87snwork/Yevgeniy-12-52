import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {ProductCardModule} from './product-card/product-card.module';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ProductCardModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
