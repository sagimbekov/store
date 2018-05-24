import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppletService } from './services/applet.service';
import { HttpModule } from '@angular/http';

import { MainComponent  } from './main/main.component';
import { LoginComponent  } from './login/login.component';
import { SettingsComponent  } from './settings/settings.component';
import { AccountComponent  } from './settings/account/account.component';
import { PasswordComponent  } from './settings/account/password/password.component';
import { AddressComponent  } from './settings/account/address/address.component';
import { ProfileComponent  } from './settings/account/profile/profile.component';


import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
	{path: '', component: MainComponent},
	{path: 'login', component: LoginComponent},
  	{
  		path: 'settings', component: SettingsComponent, canActivate: [AuthGuard],
		children: [
			{path: '', redirectTo: 'account', pathMatch: 'full'},
			{
				path: 'account', component: AccountComponent,
				children: [
					{path: '', redirectTo: 'profile', pathMatch: 'full'},
					{path: 'password', component: PasswordComponent},
          {path: 'address', component: AddressComponent},
          {path: 'profile', component: ProfileComponent},
				]
			}
		]
	},
  {path: '**', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SettingsComponent,
    AccountComponent,
    PasswordComponent,
    AddressComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [AppletService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
