import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/models/categorie';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  categories: categorie[] = [];
  nbrpages : number[]=[1,2];
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.nbrpages.forEach(element => {
      this.categoriesService.getCategories(element).subscribe((data) => {
        data.data.forEach((element) => {
          var cat: categorie = {
            name: element.name,
            id: element.id,
          };
          this.categories.push(cat);
        });
        localStorage.setItem('dataSource', JSON.stringify(this.categories));

      });
    });
    
    

  }
  onChange(categorie:categorie) {
      this.router.navigate(['categorie', JSON.stringify(categorie)]);
  }
}
