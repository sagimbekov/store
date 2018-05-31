import { Component } from '@angular/core';
import {AppletService} from './services/applet.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	 title = 'app';
  	constructor(public app: AppletService,
          public router: Router) {

      if(this.app.checkAuth()){
        this.app.getBasket().subscribe(res=>{
        })
      }
    }

    onLogOut(){
      this.app.logout();
      this.router.navigate(['/login']);
    }


}
