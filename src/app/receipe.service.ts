import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReceipeService {

  base_url="https://recipe-puppy.p.rapidapi.com/?q=";
  constructor(private http:HttpClient) { }

  getReciepeBySearch(reciepe){
  
    const _http=this.base_url+reciepe;

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'x-rapidapi-key': '9303d1b2ddmshbcf343de6e7932fp195521jsn92a69e6700da',
    'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.http.get(_http,requestOptions);
  }

  nextPage(receipe,i:number){
    
    const _http=this.base_url+receipe+"&p="+i;

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'x-rapidapi-key': '9303d1b2ddmshbcf343de6e7932fp195521jsn92a69e6700da',
    'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.http.get(_http,requestOptions);
  }
}
