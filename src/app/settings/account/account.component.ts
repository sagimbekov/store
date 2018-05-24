import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../services/applet.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {

	}

}