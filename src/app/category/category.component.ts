import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Event, Router, ParamMap, NavigationEnd} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId;
  products = [];
  categoryName;
  categories;
  attrIds = [];

	constructor(private route: ActivatedRoute,
            private router: Router,
            public app: AppletService,
            ) {
      
      router.events.subscribe( (event: Event) => {
          if (event instanceof NavigationEnd) {
             this.refreshCategory();
          }
      });
  }

	ngOnInit() {
    // this.refreshCategory();
    // this.app.getCategories().subscribe(res => {
    //   this.categories = res;
    // })
	}

  refreshCategory(){
    this.categoryId = this.route.snapshot.params['id'];
    this.app.getProductListByCategory(this.categoryId).subscribe(res=>{
      this.products = res;
    })
    this.app.getCategoryById(this.categoryId).subscribe(res=>{
      this.categories = res;
      this.categoryName = res.name;
    })
  }

  selectedId(id){
    this.attrIds.push(id);
    let settings = "&attr=";

    for(let i of this.attrIds){
      settings += i + ';';
    }
    this.app.search(this.categoryId, settings).subscribe(res => {
      console.log(res);
    })
  }

}