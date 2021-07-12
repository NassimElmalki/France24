import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CATEGORIES, URL_NEWSBYCATEGORIE } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient : HttpClient) { }

  getCategories(nbrPage:number):Observable<any>{
    return this.httpClient.get<any>(`${URL_CATEGORIES}${nbrPage}`);
  }

  getNewsByCategorie(id:number,nbrPage:number):Observable<any>{
    return this.httpClient.get<any>(`${URL_NEWSBYCATEGORIE}${id}?page=${nbrPage}`);
  }
}
