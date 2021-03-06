import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BallService } from './service/ball.service';
import { BallListComponent } from './ball-list/ball-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    BallListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	  BallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
