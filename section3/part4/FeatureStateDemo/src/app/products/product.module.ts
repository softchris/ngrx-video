import { NgModule } from "@angular/core";
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { ProductState } from './product-state';
import { listReducer, selectReducer } from './product.reducer';
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';

const reducers: ActionReducerMap<ProductState> = {
  list: listReducer,
  selectedProduct: selectReducer
};

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forFeature('products', reducers)
  ],
  providers: [],
  exports: [ ProductListComponent ]
})
export class ProductModule { }