import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../../../services/applet.service';

@Component({
  selector: 'app-addAddress',
  templateUrl: './addAddress.component.html',
  styleUrls: ['./addAddress.component.css']
})
export class AddAddressComponent implements OnInit {

	address = {
	    region: "",
	    city: "",
	    address: "",
	    address_additional: "",
	    zip_code: "",
	    mobile_phone: "",
	    country:"",
	    default: false,
	    first_name : "",
	    second_name: ""
	}

	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {
	}

	onSaveAddress() {
	  this.app.saveAddress(this.address).subscribe(res => {
	  	this.router.navigate(['/settings/account/address'])
	  })
  	}

}