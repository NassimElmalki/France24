import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { categorie } from 'src/models/categorie';
import { News } from 'src/models/news';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() categorie: categorie;
  @Input() page: number;
  @Input() collectionSize: number;
  @Input() state:boolean=false;
  public news: News[] = [];
  public cat: categorie[] = JSON.parse(localStorage.getItem('dataSource'));
  ;
  public numbColumns: number = 4;

  ngOnInit(): void {
    /*
    if (this.categorie != null) {
      this.categorieService
        .getNewsUpdateState()
        .subscribe((newsUpdated: boolean) => {
          if (newsUpdated) {
            this.news = [];
            console.log(`before changes:${this.page}`);
            this.categorieService
              .getNewsByCategorie(this.categorie.id, this.page)
              .subscribe((data) => {
                data.data.forEach((element) => {
                  var currentNew: News = {
                    title: element.title,
                    categorie: this.categorie.id,
                    description: element.description,
                    thumbnail_url: element.thumbnail_url,
                  };
                  this.news.push(currentNew);
                });
              });
            //console.log(this.news);
            this.categorieService.getNewsUpdateState().next(false);
          }
        });
    }*/




  }

  ngOnChanges(changes:SimpleChanges){
    //6
    if(this.state){
    console.log(changes);
    this.categorieService
    .getNewsByCategorie(this.categorie.id, this.page)
    .subscribe((data) => {
      [0,1,2,3,4,5].forEach((element) => {
        var currentNew: News = {
          title: data.data[element].title,
          categorie: data.data[element].category.id,
          description: data.data[element].description,
          thumbnail_url: data.data[element].thumbnail_url,
        };
        this.news.push(currentNew);
      });
    });
  }
  else {


    //10
    this.news=[];
    this.categorieService
              .getNewsByCategorie(this.categorie.id, this.page)
              .subscribe((data) => {
                data.data.forEach((element) => {
                  var currentNew: News = {
                    title: element.title,
                    categorie: this.categorie.id,
                    description: element.description,
                    thumbnail_url: element.thumbnail_url,
                  };
                  this.news.push(currentNew);
                });
              });
            }
    console.log(changes);
  }
  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 450) {
      this.numbColumns = 12;
    } else if (this.scrWidth < 700) {
      this.numbColumns = 6;
    } else {
      this.numbColumns = 4;
    }
  }

  // Constructor
  constructor(
    private categorieService: CategoriesService,
    private router: Router
  ) {
    this.getScreenSize();
  }
}
