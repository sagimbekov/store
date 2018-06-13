import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  
  favorites = [];
  currentId = 0;

  constructor(private route: ActivatedRoute,
              public app: AppletService,
              public router: Router) {
  }

  ngOnInit() {
    this.getFav();
  }

  getFav(){
    this.app.getFav().subscribe(res => {
      if(res.length){
        this.favorites = res;
      }else{
        this.favorites = null;
      }
    })
  }


  delFav(id){
    this.app.delFav(id).subscribe(res => {
      this.getFav();
    })
  }

  addToBasket(currId, id,count){
    let p = {
      product: id,
      count: count
    }
    if(this.app.checkAuth()){
      this.app.addToBasket(p).subscribe(res => {
          this.app.getBasket().subscribe(res =>{
            this.currentId = currId;
          });
      })
    }else{
      this.router.navigate(["login"]);
    }
  }


}