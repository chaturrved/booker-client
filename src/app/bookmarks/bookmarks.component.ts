import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { Observable, map } from 'rxjs';
import { Bookmark, BookmarksGQL } from 'src/generated-types';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit{
  bookmarks$ : Observable<Bookmark[]>

  constructor(private readonly dialog: MatDialog, private readonly bookmarksGql: BookmarksGQL) {}

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarksGql.watch().valueChanges
      .pipe(map((result) => {
          return result.data.bookmarks
        })
      )
  }

  onFabClick() {
    this.dialog.open(CreateBookmarkComponent)
  }

  onBookmarkClick(bookmarkId: string){
    
  }
}
