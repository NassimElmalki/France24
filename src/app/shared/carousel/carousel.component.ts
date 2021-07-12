import { Component, OnInit } from '@angular/core';
import { News } from 'src/models/news';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  news: News[] = [];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    [1, 2].forEach((nbrPage) => {
      this.categoriesService.getCategories(nbrPage).subscribe((data) => {
        data.data.forEach(categorie => {
          categorie.news.forEach(element => {
            var article:News={
              title:element.title,
              thumbnail_url:element.thumbnail_url,
              categorie:element.categorie,
              description:element.description
            };
            this.news.push(article);
          });
        });
      });
    });
    console.log(this.news);
  }
}
