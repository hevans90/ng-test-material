import { Component, Input, OnInit } from '@angular/core';

import { CharacterCard } from '../../services/search.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @Input() character: CharacterCard;

  constructor() {}

  ngOnInit() {}
}
