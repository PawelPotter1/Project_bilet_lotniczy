import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const pageUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey: String =  '6a25213c0c3b697479aff43cfb1aa86c'
const iconUrl: String = 'http://openwheathermap.org/img/w/'
const api_url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a25213c0c3b697479aff43cfb1aa86c";

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  public pogoda_obj;

  getWeather(location) {
    return this.http.get(pageUrl+ '?q=' + location + '&APPID=' + apiKey)
  }

  getIconUrl (icon: String) {
    return 'http://openweathermap.org/img/wn/' + icon + ".png"
  }

}