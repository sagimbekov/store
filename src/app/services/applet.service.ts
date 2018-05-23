import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppletService {

	API_URL = 'http://139.59.155.219:8000';

	constructor(private http: Http,
              	private httpClient: HttpClient) {
  	}

  	register(user): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.post(this.API_URL+'/cabinet/profile/', {user}, 
	        	{headers: headers})
	      	.map((res: Response) => {
	        	return res.json();
	      	})
	      	.catch(this.handleError);
	}

 

	private handleError(error: any): Promise<any> {
	    return Promise.reject(JSON.parse(error._body));
  	}



}