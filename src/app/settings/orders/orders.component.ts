import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../services/applet.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	orders = [];
	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {
		this.app.getOrders().subscribe(res => {
			this.orders = res;
		})
	}

}

// import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute, Router, ParamMap} from '@angular/router';
// import {AppletService} from '../../services/applet.service';

// @Component({
//   selector: 'app-orders',
//   templateUrl: './orders.component.html',
//   styleUrls: ['./orders.component.css']
// })
// export class OrdersComponent implements OnInit {
// 	orders = [];

// 	constructor(private route: ActivatedRoute,
// 	      		public app: AppletService,
// 	      		public router: Router) {
// 	}

// 	ngOnInit() {
// 		this.route.data
// 	      .subscribe((data) => {
// 	        this.orders = data.detail;
// 	      });
// 	}

// }