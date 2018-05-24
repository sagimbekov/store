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

import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
	{path: '', component: MainComponent},
	{path: '', component: MainComponent},
	{path: 'login', component: LoginComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SettingsComponent
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
