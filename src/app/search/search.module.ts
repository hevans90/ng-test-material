import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ContactComponent} from './components/contact/contact.component';
import {ContactsComponent} from './components/contacts/contacts.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [ContactComponent, ContactsComponent],
  exports: [ContactComponent, ContactsComponent],
})
export class SearchModule {}
