import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Event, Router, ParamMap, NavigationEnd} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.css']
})
export class ProtectionComponent implements OnInit {

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