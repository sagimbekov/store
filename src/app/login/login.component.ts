import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private currentUser: SocialUser;
  	private loggedIn: boolean;

	user = {
		email: '', password: '', name: ''
	};
	showL = true;
	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router,
	      		private authService: AuthService) {
	}

	ngOnInit() {
		this.check();
	}

	check(){
		this.authService.authState.subscribe((user) => {
	      this.currentUser = user;
	      this.loggedIn = (user != null);
	    });
	}

 	signInWithGoogle(): void {
	    let res = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	    console.log(res)
	    if(res){
	    	this.user.email =this.currentUser.email;
	    	this.user.name =this.currentUser.firstName;
	    	this.app.googleAuth(this.currentUser.authToken).subscribe(res => {
	    		this.router.navigate(['/settings']);
  				this.app.getBasket().subscribe(res => {
  					
  				})
	    	})
	    }
	}
	 
	signInWithFB(): void {
	    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
	}
	 


	onRegisterForm() {
	    this.app.register(this.user).subscribe(res => {
	    	if(res.data.token){
  				this.router.navigate(['/settings']);
  				this.app.getBasket().subscribe(res => {
  					
  				})
  			}
	    })
	      
  	}

  	onLoginForm(){
  		this.app.authenticate(this.user).subscribe(res => {
  			if(res.data.token){
  				this.router.navigate(['/settings']);
  				this.app.getBasket().subscribe(res => {
  					
  				})
  			}
  		})
  	}
}