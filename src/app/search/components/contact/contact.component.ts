import {Component, Input, OnInit} from '@angular/core';

import {ContactCard} from '../../services/search.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: ContactCard;

  constructor() { }

  ngOnInit() {}

}
