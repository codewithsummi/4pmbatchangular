import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserService {
  constructor(private http:HttpClient) { }
  getData(url)
  {
     return this.http.get(url);
  }
  getPostData(url,data)
  {
     return this.http.post(url,data);
  }
}
