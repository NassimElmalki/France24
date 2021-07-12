import { environment } from "src/environments/environment";

export enum Constants{

    economie = 'Économie',
    sports = 'Sports',

}

export const URL_CATEGORIES=`${environment.baseURL}api/categories?page=`;
export const URL_NEWSBYCATEGORIE=`${environment.baseURL}api/newsbycategories/`;
