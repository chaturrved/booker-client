import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bookmark, BookmarkDocument, UpdateBookmarkGQL } from 'src/generated-types';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {
  link = new FormControl('',[Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly data: { bookmark: Bookmark },
    private readonly dialorRef: MatDialogRef<AddLinkComponent>,
    private readonly updateBookmarkGql: UpdateBookmarkGQL,
  ) {}

  ngOnInit(): void {
    
  }

  addLink(){
    if(this.data?.bookmark?.links !== null && this.link.value !== null){
      this.updateBookmarkGql.mutate({
        updateBookmarkData: {
          _id: this.data.bookmark._id,
          links: [...this.data.bookmark.links, this.link.value],
        }
      },
      {
        refetchQueries: [{
          query: BookmarkDocument,
          variables: {
            _id: this.data.bookmark._id,
          }
        }]
      }).subscribe(() => {
        this.dialorRef.close();
      });
    }
  }

  getLinkError(){
    if( this.link.hasError('required') ) {
      return 'Please enter valid url.';
    }
    return '';
  }
}
