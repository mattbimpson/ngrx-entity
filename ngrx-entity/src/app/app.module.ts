import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { reducers, metaReducers } from './store';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production, serialize: {options: true}}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
