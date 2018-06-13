import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id;
  product;
  count = 1;
  category = [];
  basketInfo = false;

  constructor(private route: ActivatedRoute,
              public app: AppletService,
              public router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.app.getProductById(this.id).subscribe(res=>{
      this.product = res;
      this.app.getCategoryById(this.product.category).subscribe(res => {
        this.category = res
      })
    })
  }

  addToBasket(){
    let p = {
      product: this.id,
      count: this.count
    }
    if(this.app.checkAuth()){
      this.app.addToBasket(p).subscribe(res => {
          this.app.getBasket().subscribe(res =>{
            this.basketInfo = true;
          });
      })
    }else{
      this.router.navigate(["login"]);
    }
  }

  addToFav(){
    this.app.addToFav(this.id).subscribe(res => {
      this.app.getFav().subscribe(res => {
        
      })
    })
  }


}