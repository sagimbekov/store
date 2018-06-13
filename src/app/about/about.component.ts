import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Event, Router, ParamMap, NavigationEnd} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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