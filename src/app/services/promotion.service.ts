import { Injectable } from '@angular/core';
//import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { baseUrl } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Promotion[]>{
    return this.http.get<Promotion[]>(baseUrl + 'promotions');
  }

  getFeaturedPromotion(): Observable<Promotion>{
    return this.http.get<Promotion[]>(baseUrl + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
  }

  getPromotion(id): Observable<Promotion>{
    return this.http.get<Promotion>(baseUrl + 'promotions/' +id);
  }
}
