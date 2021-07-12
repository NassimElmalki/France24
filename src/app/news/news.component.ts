import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';
import { News } from 'src/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  new: News = {
    title: "L'expansionnisme chinois, une politique qui doit plus à la \"tradition\" qu'au Parti communiste",
    categorie: 1,
    description: "\nLe Parti communiste chinois fête jeudi son centenaire, dans un contexte de méfiance internationale à l'égard des velléités expansionnistes de l'empire du Milieu. Si le président chinois Xi Jinping a réitéré mercredi sa volonté de \"hisser\" son pays \"au premier rang du monde\" à l'horizon 2049, cette stratégie appartient, selon Jean-Vincent Brisset, chercheur associé à l'Iris, davantage à la \"tradition\" chinoise qu'à l'idéologie du parti.\n",
    thumbnail_url: "https://s.france24.com/media/display/87eea21e-d9b6-11eb-a648-005056a90284/w:1024/p:16x9/000_9DK92X.jpg"
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.new = JSON.parse(params.new);
    });
    console.log(this.new);
  }
  ngOnChange(){

  }
}
