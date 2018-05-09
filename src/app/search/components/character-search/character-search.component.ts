import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { CharacterCard, SearchService } from '../../services/search.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
})
export class CharacterSearchComponent implements OnInit {
  public searchForm: FormGroup;
  public charactersResult: Observable<CharacterCard[]>;
  public loading = false;

  public ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  constructor(private searchService: SearchService) {}

  public searchForCharacter() {
    this.loading = true;
    this.charactersResult = this.searchService.searchForCharacter(
      this.searchForm.get('name').value,
    );
  }
}
