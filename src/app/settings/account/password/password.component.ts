import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../../services/applet.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

	old_password;
	new_password;
	confirm_password;

	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {

	}

	onChangePassword() {
	   this.app.changePassword(this.old_password, this.new_password).subscribe(res=>{
	   		this.old_password = "";
	   		this.new_password = "";
	   		this.confirm_password = "";
	   })
	      
  	}

}