import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

import {ContactCard, SearchService} from '../../services/search.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public searchForm: FormGroup;
  public contactsResult: Observable<ContactCard[]>;

  public ngOnInit() {
    this.searchForm = new FormGroup({
        name: new FormControl('', Validators.required)
      });
  }

  constructor(
    private searchService: SearchService
  ) {}

  public searchForCharacter() {
    this.contactsResult = this.searchService.searchForCharacter(this.searchForm.get('name').value);
  }

}
