import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 	cat = []; 

	constructor(private route: ActivatedRoute,
            public app: AppletService) {
  }

	ngOnInit() {
	  this.app.getProductListByCategory(3).subscribe(res => {
      this.cat = res.slice(0,8);
    })
	}

}