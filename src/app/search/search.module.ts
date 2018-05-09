import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MaterialManifestModule } from '../material-manifest/material-manifest.module';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, MaterialManifestModule],
  declarations: [ContactComponent, ContactsComponent],
  exports: [ContactComponent, ContactsComponent],
})
export class SearchModule {}
