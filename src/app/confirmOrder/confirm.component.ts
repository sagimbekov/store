import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  basket;
  total = {
    price : 0,
    count: 0,
    weight: 0,
    totalPrice: 0
  }
  address = {
      region: "",
      city: "",
      address: "",
      address_additional: "",
      zip_code: "",
      mobile_phone: "",
      country:"",
      default: false,
      first_name : "",
      second_name: "",
      id: ""
  }
  addresses = [];
  selectedAddress;

	constructor(private route: ActivatedRoute,
            public app: AppletService,
            public router: Router,) {
  }

	ngOnInit() {
	  this.getBasket();
    this.app.getAddresses().subscribe(res => {
      this.addresses = res;
      this.address = res[0];
      this.selectedAddress = this.address.id;
    })
	}

  getAddress(id){
    this.app.getAddress(id).subscribe(res => {
      if(res){
        this.address = res;
      }
    })
  }

  getBasket(){
    this.app.getBasket().subscribe(res=>{
      if(res){
        this.basket = res;
        this.total.price = this.calc(res, "price");
        this.total.count = this.calc(res, "count");
        this.total.totalPrice = this.calc1(res, "price")
        this.total.weight = this.calc1(res, "weight")
      }
    })
  }

  confirmOrder(){
    let addres = {
      'user_address': this.selectedAddress
    }
    this.app.confirmOrder(addres).subscribe(res=>{
      this.getBasket()
      this.router.navigate(["/settings/orders"])
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

}