import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket;
  total = {
    price : 0,
    count: 0,
    weight: 0,
    totalPrice: 0
  }

	constructor(private route: ActivatedRoute,
            public app: AppletService) {
  }

	ngOnInit() {
	  this.getBasket();
	}

  getBasket(){
    this.app.getBasket().subscribe(res=>{
      if(res.length){
        this.basket = res;
        this.total.price = this.calc(res, "price");
        this.total.count = this.calc(res, "count");
        this.total.totalPrice = this.calc1(res, "price")
        this.total.weight = this.calc1(res, "weight")
      }
    })
  }

  calc1(arr, type){
    let sum = 0;

    arr.forEach(item =>{
      sum += item.count * item.product[type];
    })

    return sum;
  }

  calc(arr, type){
    let initialValue = 0;
    let init = 0;
    let sum = arr.reduce(function (accumulator, currentValue) {
      if(type == "count"){
        return accumulator + currentValue.count;
      }else{
        return accumulator + currentValue.product[type];
      }
    },initialValue)
    return sum;
  }

  deleteItem(id){
    this.app.delBasketItem(id).subscribe(res => {
      this.getBasket();
    })
  }

}