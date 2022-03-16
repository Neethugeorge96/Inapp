import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  sectionUrl = 'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key='
  articleUrl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key='
  api_key = 'uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7'
  public readLaterList = new BehaviorSubject<any>([]);



  constructor(private http:HttpClient) { }


  getSections() {
    return this.http.get(this.sectionUrl + this.api_key);
  }

  getarticleList(){
return this.http.get(this.articleUrl + this.api_key)
  }

  setData(data:any){
   this.readLaterList.next(data);
  }

  getData(){
    return this.readLaterList;
  }
}
