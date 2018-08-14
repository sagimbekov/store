import { Component, OnInit } from '@angular/core';
import {AppletService} from './services/applet.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
// import { AuthService } from "angular4-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 	title = 'app';
  categories;
  SelectCat;
  SearchText;
  orderId;

  	constructor(public app: AppletService,
          public router: Router,
          // private authService: AuthService
          ) {

      if(this.app.checkAuth()){
        this.app.getBasket().subscribe(res=>{
        })
        this.app.getFav().subscribe(res=>{
        })
      }

    }

    ngOnInit() {
      this.app.getCategories().subscribe(res=>{
        this.categories = res;
        if(res.length){
          this.SelectCat = res[0].id
        }
      })
    }
  
    onLogOut(){
      this.app.logout();
      // this.authService.signOut();
      this.router.navigate(['/login']);
    }

    searchByCat(){
      if(this.SearchText){
       this.router.navigate(['/search'],{queryParams: {c: this.SelectCat, text: this.SearchText}}  );
      }
    }


}
