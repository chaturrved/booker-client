import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookmarksDocument, CreateBookmarkGQL } from 'src/generated-types';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {
  bookmarkName = new FormControl('', [Validators.required]);

  constructor(
    private readonly createBookmakGql: CreateBookmarkGQL,
    private readonly dialogRef: MatDialogRef<CreateBookmarkComponent>
  ) {}

  ngOnInit(): void {

  }

  getBookmarkNameError() {
    if(this.bookmarkName.hasError('required')){
      return 'You must enter a name.';
    }
    return '';
  }

  createBookmark() {
    if(this.bookmarkName.value){
      this.createBookmakGql.mutate(
      {
        createBookmarkData: {name: this.bookmarkName.value},
      },
      {
        refetchQueries: [{
          query: BookmarksDocument
        }]
      }).subscribe(() => {
        this.dialogRef.close()
      })
    }
  }

}
