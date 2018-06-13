import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppletService } from './services/applet.service';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';

import { MainComponent  } from './main/main.component';
import { ProductComponent  } from './product/product.component';
import { BasketComponent  } from './basket/basket.component';

import { ConfirmComponent  } from './confirmOrder/confirm.component';
import { AboutComponent  } from './about/about.component';
import { ReturnComponent  } from './return/return.component';
import { ProtectionComponent  } from './protection/protection.component';
import { SearchComponent  } from './search/search.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { CategoryComponent  } from './category/category.component';
import { LoginComponent  } from './login/login.component';
import { SettingsComponent  } from './settings/settings.component';
import { AccountComponent  } from './settings/account/account.component';
import { OrdersComponent  } from './settings/orders/orders.component';
import { PasswordComponent  } from './settings/account/password/password.component';
import { AddressComponent  } from './settings/account/address/address.component';
import { AddAddressComponent  } from './settings/account/address/addAddress/addAddress.component';
import { EditAddressComponent  } from './settings/account/address/editAddress/editAddress.component';
import { ProfileComponent  } from './settings/account/profile/profile.component';
import {OrdersResolve} from './_resolve/orders.resolve'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
	{path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'confirm', component: ConfirmComponent},
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
          {path: 'profile', component: ProfileComponent},
          {path: 'address', component: AddressComponent,          },
          {path: 'editAddress/:id', component: EditAddressComponent},
          {path: 'addAddress', component: AddAddressComponent},
        ]
      },
      // {path: 'orders', component: OrdersComponent,
      //   resolve: {
      //     detail: OrdersResolve,
      //   }
      // },
      {path: 'orders', component: OrdersComponent},
    ]
  },
  {path: 'search/:id/:text', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'protection', component: ProtectionComponent},
  {path: 'return', component: ReturnComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: '**', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    BasketComponent,
    ReturnComponent,
    ProtectionComponent,
    FavouritesComponent,
    OrdersComponent,
    ConfirmComponent,
    MainComponent,
    LoginComponent,
    SettingsComponent,
    AccountComponent,
    CategoryComponent,
    ProductComponent,
    PasswordComponent,
    AddressComponent,
    ProfileComponent,
    AddAddressComponent,
    EditAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    // Ng4LoadingSpinnerModule.forRoot() 
  ],
  providers: [AppletService,AuthGuard,OrdersResolve,
     { provide: LOCALE_ID, useValue: "ru-RU" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
