import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../services/applet.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	constructor(private route: ActivatedRoute,
	      		public app: AppletService,
	      		public router: Router) {
	}

	ngOnInit() {

	}

}