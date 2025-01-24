import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './pages/product/product.component';
import { StoreComponent } from './pages/store/store.component';
import { StoreRoutingModule } from './store-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [StoreComponent, ProductComponent],
  imports: [CommonModule, StoreRoutingModule, SharedModule, IonicModule],
})
export class StoreModule {}
