import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user = {
		email: '', password: '', first_name: '', second_name: ''
	};

	constructor(private route: ActivatedRoute,
	      		public app: AppletService) {
	}

	ngOnInit() {

	}

	onRegisterForm() {
	    this.app.register(this.user).subscribe(res => {
	    	console.log(res)
	    })
	      
  	}


}