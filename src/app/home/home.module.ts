import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, ArticleComponent],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
    IonicModule
  ]
})
export class HomeModule { }
