import { Component } from '@angular/core';
import {AppletService} from './services/applet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  	constructor(public app: AppletService) {
    }

}
