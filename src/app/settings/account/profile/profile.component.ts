import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../../services/applet.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	profile = {
		first_name: "",
		second_name: "",
		email: ""
	}

	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {
		this.app.getProfile().subscribe(res => {
			if(res){
				this.profile.first_name = res.first_name;
				this.profile.second_name = res.second_name;
				this.profile.email = res.email;
			}
		})
	}

	onSaveProfile() {
	  this.app.saveProfile(this.profile).subscribe(res => {
	  	console.log(res)
	  })
  	}

}