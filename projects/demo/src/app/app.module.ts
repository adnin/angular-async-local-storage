import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageModule } from '@ngx-pwa/local-storage';

import { AppComponent } from './app.component';
import { ReloadComponent } from './reload/reload.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ReloadComponent, HomeComponent],
  imports: [
    BrowserModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    }),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
