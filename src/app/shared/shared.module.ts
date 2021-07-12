import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    CarouselComponent,
    ArticleComponent,
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports:[NavbarComponent,
  CarouselComponent,
  ArticleComponent,
  ArticlesComponent]

})
export class SharedModule { }
