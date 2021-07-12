import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categorie',
    loadChildren: () =>
      import('./categorie/categorie.module').then((m) => m.CategorieModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'categorie/:categorie',
    loadChildren: () =>
      import('./categorie/categorie.module').then((m) => m.CategorieModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'news/:new',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
