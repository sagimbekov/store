import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../../services/applet.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

	address = {
	    region: "",
	    city: "",
	    address: "",
	    address_additional: "",
	    zip_code: "",
	    mobile_phone: "",
	    country:"",
	    default: false
	}

	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {
		this.app.getAddress().subscribe(res => {
			if(res){
				this.address.address = res.address;
				this.address.address_additional = res.address_additional;
				this.address.city = res.city;
				this.address.mobile_phone = res.mobile_phone;
				this.address.region = res.region;
				this.address.zip_code = res.zip_code;
			}
		})
	}

	onSaveAddress() {
	  this.app.saveAddress(this.address).subscribe(res => {
	  	console.log(res)
	  })
  	}

}