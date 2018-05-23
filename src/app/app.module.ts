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

const appRoutes: Routes = [
	{path: '', component: MainComponent},
	{path: '', component: MainComponent},
	{path: 'login', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent
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
  providers: [AppletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
