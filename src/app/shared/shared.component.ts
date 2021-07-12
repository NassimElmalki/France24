import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/models/categorie';
import { Constants } from 'src/utils/constants';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  catName :string;
  categorie :categorie;
  categorie2 : categorie;

  public cat: categorie[] = JSON.parse(localStorage.getItem('dataSource'));

  constructor(private router: Router) { }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.categorie = this.cat[this.randomIntFromInterval(0,this.cat.length)];
    this.categorie2 = this.cat[this.randomIntFromInterval(0,this.cat.length)];
  }


  seeMore(categorie:categorie){

    this.router.navigate(['categorie',JSON.stringify(categorie)]);

  }

}
