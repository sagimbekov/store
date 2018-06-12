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
  categories;
  SelectCat;
  SearchText;

  	constructor(public app: AppletService,
          public router: Router) {

      if(this.app.checkAuth()){
        this.app.getBasket().subscribe(res=>{
        })
      }

      this.app.getCategories().subscribe(res=>{
        this.categories = res;
        if(res){
          this.SelectCat = res[0].id
        }
      })
    }

    onLogOut(){
      this.app.logout();
      this.router.navigate(['/login']);
    }

    searchByCat(){
      this.app.searchByCat(this.SelectCat, this.SearchText).subscribe(res => {
        console.log(res)
      })
    }


}
