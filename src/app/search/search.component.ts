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
  text;
  products;
  categoryName;

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
   
  }

  refreshCategory(){
    this.categoryId = this.route.snapshot.params['id'];
    this.text = this.route.snapshot.params['text'];
    
    this.app.fulltextSearch('?category=' + this.categoryId + '&text=asd').subscribe(res => {
        this.products = res;
    })

    this.app.getCategoryById(this.categoryId).subscribe(res=>{
      this.categoryName = res.name;
    })
  }

  

}