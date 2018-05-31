import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../../../services/applet.service';

@Component({
  selector: 'app-editAddress',
  templateUrl: './editAddress.component.html',
  styleUrls: ['./editAddress.component.css']
})
export class EditAddressComponent implements OnInit {

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
	    second_name: "",
	    id: ""
	}

	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {
		this.address.id = this.route.snapshot.paramMap.get('id');
		this.app.getAddress(this.address.id).subscribe(res => {
			if(res){
				this.address = res;
			}
		})
	}

	onSaveAddress() {
	  this.app.changeAddress(this.address).subscribe(res => {
	  	this.router.navigate(['/settings/account/address'])
	  })
  	}

}