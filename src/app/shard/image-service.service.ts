import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import {Jsonp} from '@angular/http';


@Injectable()
export class ImageServiceService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=30";

  constructor(private _http: Http, private _josnP: Jsonp){ }

  getImage(query){
    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    
   

   let options = new RequestOptions({method: RequestMethod.Get, headers: headers });

    
    return this._http.get(this.URL + query + this.perPage, options)
    .map(res =><string> res.json());
  }

 
}
