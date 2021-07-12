import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/models/news';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() new :News;
  constructor() { }

  ngOnInit(): void {

  }

}
