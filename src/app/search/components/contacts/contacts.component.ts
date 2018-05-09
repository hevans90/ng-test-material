import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { ContactCard, SearchService } from '../../services/search.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public searchForm: FormGroup;
  public contactsResult: Observable<ContactCard[]>;
  public loading = false;

  public ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  constructor(private searchService: SearchService) {}

  public searchForCharacter() {
    this.loading = true;
    this.contactsResult = this.searchService.searchForCharacter(
      this.searchForm.get('name').value,
    );
  }
}
