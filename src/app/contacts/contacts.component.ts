import {Component, OnInit} from '@angular/core';

import {StarWarsService} from '../star-wars.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public searchForm: FormGroup;

  public ngOnInit() {
    this.searchForm = new FormGroup({
        name: new FormControl('', Validators.required)
      });
  }

  constructor(
    private starWarsService: StarWarsService
  ) {}

  public searchForCharacter(name: string) {
    return this.starWarsService.searchForPerson(name);
  }

}
