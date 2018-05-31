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

	basket = 0;

	constructor(private http: Http,
              	private httpClient: HttpClient) {
  	}

  	register(user: any): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.post(this.API_URL+'/cabinet/customers/', user, 
	        	{headers: headers})
	      	.map(res => {
	      		const resp = res.json();
	        	if (resp.data.token && resp.data.user) {
		          window.localStorage.setItem('auth_key', resp.data.token);
		          window.localStorage.setItem('user', JSON.stringify(resp.data.user));
		        }
		        return resp;
	      	})
	      	.catch(this.handleError);
	}

	authenticate(user: any): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.post(this.API_URL+'/cabinet/customers/authenticate/', {username:user.email , password:user.password }, 
	        	{headers: headers})
	      	.map(res => {
	      		const resp = res.json();
	        	if (resp.data.token && resp.data.user) {
		          window.localStorage.setItem('auth_key', resp.data.token);
		          window.localStorage.setItem('user', JSON.stringify(resp.data.user));
		        }
		        return resp;
	      	})
	      	.catch(this.handleError);
	}

	changePassword(oldPassword, newPassword): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.post(this.API_URL+'/cabinet/customers/set_password/', {old_password:oldPassword , new_password:newPassword }, 
	        	{headers: headers})
	      	.map(res => {
	      		return res;
	      	})
	      	.catch(this.handleError);
	}

	saveAddress(address): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.post(this.API_URL+'/cabinet/customers/addresses/', address, 
	        	{headers: headers})
	      	.map(res => {
	      		return res;
	      	})
	      	.catch(this.handleError);
	}

	changeAddress(address): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.patch(this.API_URL+'/cabinet/customers/addresses/'+ address.id, address, 
	        	{headers: headers})
	      	.map(res => {
	      		return res;
	      	})
	      	.catch(this.handleError);
	}

	getAddresses(): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.get(this.API_URL+'/cabinet/customers/addresses/', 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	getAddress(id): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.get(this.API_URL+'/cabinet/customers/addresses/' + id, 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	getProfile(): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.get(this.API_URL+'/cabinet/customers/'+this.getUser().id, 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}


	getProductListByCategory(id): Observable<any>{
		const headers = new Headers();
	    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.get(this.API_URL+'/store/products/?category='+id, 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	getProductById(id): Observable<any>{
		const headers = new Headers();
	    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.get(this.API_URL+'/store/products/'+id, 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	addToBasket(product):Observable<any>{
		const headers = new Headers();
    		headers.append('Content-Type', 'application/json');
    		headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.post(this.API_URL+'/store/basket/', product , 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	confirmOrder(address):Observable<any>{
		const headers = new Headers();
    		headers.append('Content-Type', 'application/json');
    		headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.post(this.API_URL+'/store/basket/confirm/', address , 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	getOrders(): Observable<any>{
		const headers = new Headers();
	    	headers.append('Content-Type', 'application/json');
	    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.get(this.API_URL+'/store/orders/', 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	getCategoryById(id): Observable<any>{
		const headers = new Headers();
	    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.get(this.API_URL+'/store/categories/'+id, 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	getCategories(): Observable<any>{
		const headers = new Headers();
	    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.get(this.API_URL+'/store/categories/', 
	        	{headers: headers})
	      	.map(res => {
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	getBasket(): Observable<any>{
		const headers = new Headers();
	    	headers.append('Content-Type', 'application/json');
	    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.get(this.API_URL+'/store/basket/', 
	        	{headers: headers})
	      	.map(res => {
	      		this.basket = res.json().data.length
	      		return res.json().data;
	      	})
	      	.catch(this.handleError);
	}

	saveProfile(profile): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.patch(this.API_URL+'/cabinet/customers/'+this.getUser().id, profile, 
	        	{headers: headers})
	      	.map(res => {
	      		const resp = res.json();
	      		window.localStorage.setItem('user', JSON.stringify(resp.data));
	      		return res;
	      	})
	      	.catch(this.handleError);
	}

	delBasketItem(id): Observable<any> {
	    const headers = new Headers();
	    	headers.append('Content-Type', 'application/json');
	    	headers.append('Authorization', "Token " + this.getToken());
	    return this.http
	      	.delete(this.API_URL+'/store/basket/'+id, 
	        	{headers: headers})
	      	.map(res => {
	      		const resp = res.json();
	      		return res;
	      	})
	      	.catch(this.handleError);
	}


	checkAuth() {
	    return window.localStorage.getItem('auth_key') && window.localStorage.getItem('user');
	}

	getUser(){
		const parsedUser = JSON.parse(window.localStorage.getItem('user'));
	    if (parsedUser) {
	      return parsedUser;
	    }
	    return null;
	}

	logout() {
	    window.localStorage.removeItem('auth_key');
	    window.localStorage.removeItem('user');
	    return true;
  	}


	getToken() {
	    if (window.localStorage.getItem('auth_key')) {
	      return window.localStorage.getItem('auth_key');
	    }
	    return null;
  	}


	private handleError(error: any): Promise<any> {
	    return Promise.reject(JSON.parse(error._body));
  	}



}