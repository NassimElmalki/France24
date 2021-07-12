import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categorie } from 'src/models/categorie';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent implements OnInit {
  public categorie: categorie;
  public currentPage:number=1;
  public collectionSize:number;
  constructor(private route: ActivatedRoute,private categoriesService:CategoriesService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categorie = JSON.parse(params.categorie);
      this.currentPage=1;
      this.categoriesService.getNewsByCategorie(this.categorie.id,this.currentPage).subscribe((data)=>{
        this.collectionSize=data.meta.total;
      });
    });
  }

  paginate(event)
  {
    this.currentPage=event;
    //console.log(this.currentPage);
  }
}
