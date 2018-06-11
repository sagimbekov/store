import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Event, Router, ParamMap, NavigationEnd} from '@angular/router';
import {AppletService} from '../services/applet.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId;
  products = [];
  categoryName;
  categories = [];

	constructor(private route: ActivatedRoute,
            private router: Router,
            public app: AppletService,
            private spinnerService: Ng4LoadingSpinnerService) {
      
      router.events.subscribe( (event: Event) => {
          if (event instanceof NavigationEnd) {
             this.refreshCategory();
          }
      });
  }

	ngOnInit() {
    this.refreshCategory();
    this.app.getCategories().subscribe(res => {
      this.categories = res;
    })
	}

  refreshCategory(){
    // this.spinnerService.show();
    this.categoryId = this.route.snapshot.params['id'];
    this.app.getProductListByCategory(this.categoryId).subscribe(res=>{
      this.products = res;
    })
    this.app.getCategoryById(this.categoryId).subscribe(res=>{
      this.categoryName = res.name;
      // this.spinnerService.hide();
    })
  }

}