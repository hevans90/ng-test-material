import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialManifestModule } from './material-manifest/material-manifest.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaterialManifestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
