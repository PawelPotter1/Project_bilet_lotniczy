import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { Todo } from '../todos/models/todo';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  api_url = 'http://localhost:3000/timetable/'

  constructor(private http:HttpClient) { }

  currencyKind;
  getCurrency(){
    return this.http.get(`https://api.nbp.pl/api/exchangerates/rates/a/${this.currencyKind}/?format=json`)
  }

  queryTodo(query) {
    return this.http.get<Todo[]>(this.api_url, {
      params:{
        q:query
      }
    }).pipe(
      share()
    )
  }

}
