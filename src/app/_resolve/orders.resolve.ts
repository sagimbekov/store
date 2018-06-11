import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AppletService } from '../services/applet.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class OrdersResolve implements Resolve<any> {
	constructor(private  dataservice: AppletService){}
	resolve(route:ActivatedRouteSnapshot, 
	    state:RouterStateSnapshot,
	   ): Observable<any> {
		return this.dataservice.getOrders();  
	}
}