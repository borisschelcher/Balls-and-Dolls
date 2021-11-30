import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Page/Common/header/header.component';
import { FooterComponent } from './Page/Common/footer/footer.component';
import { NotFoundComponent } from './Page/Not-Found/not-found/not-found.component';
import { HomeComponent } from './Page/Home/home/home.component';
import { RouterModule } from '@angular/router';

import appRoutes from './Routes/routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
