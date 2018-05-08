import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { MaterialManifestModule } from './material-manifest/material-manifest.module';
import { AppComponent } from './app.component';
import {StarWarsService} from './star-wars.service';
import {ContactComponent} from './contact/contact.component';
import {ContactsComponent} from './contacts/contacts.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ContactComponent, ContactsComponent],
  imports: [BrowserModule, MaterialManifestModule, ReactiveFormsModule, HttpClientModule],
  providers: [StarWarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
