import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Event, Router, ParamMap, NavigationEnd} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categoryId;
  products = [];
  categoryName;
  categories;
  attrIds = [];
  serchedText;

  constructor(private route: ActivatedRoute,
            private router: Router,
            public app: AppletService,
            ) {

      this.route.queryParams.subscribe(params => {
        this.categoryId = params['c'];
        this.serchedText = params['text'];
        this.refreshCategory();
      });
      
  }

  ngOnInit() {

  }

  refreshCategory(){

    this.app.getCategoryById(this.categoryId).subscribe(res=>{
      this.categories = res;
      this.categoryName = res.name;
    })
    let s = '?c=' + this.categoryId;
    if(this.serchedText){
      s += "&text="+this.serchedText;
    }
    this.app.fulltextSearch(s).subscribe(res => {
      this.products = res;
      console.log(res);
    })
  }

  selectedId(id){
    this.attrIds.push(id);
    let settings = "&attr=";

    for(let i of this.attrIds){
      settings += i + ',';
    }
     this.app.fulltextSearch('?c=' + this.categoryId + settings).subscribe(res => {
      this.products = res;
      console.log(res);
    })
  }

}