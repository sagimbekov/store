import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Event, Router, ParamMap, NavigationEnd} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

	constructor(private route: ActivatedRoute,
            private router: Router,
            public app: AppletService,
            ) {
      

  }

	ngOnInit() {

	}

  refreshCategory(){

  }

}