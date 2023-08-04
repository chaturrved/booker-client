import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Bookmark, BookmarkGQL, Link, LinksGQL } from 'src/generated-types';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  bookmark: Bookmark;
  links: Link[];
  isLoading: Boolean = true; 

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookmarkGql: BookmarkGQL,
    private readonly diaglog: MatDialog,
    private readonly linksGql: LinksGQL
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((param) => {
        return this.bookmarkGql.watch({_id: param['id']}).valueChanges;
      }),
      switchMap((value) => {
        this.bookmark = value.data.bookmark;
        return this.linksGql.watch({urls: value.data.bookmark.links}).valueChanges;
      })
    ).subscribe((value) => {
      this.isLoading = value.loading;
      this.links = value.data.links;
    })
  }

  onAdd(){
    this.diaglog.open(AddLinkComponent,{
      data: {bookmark: this.bookmark}
    })
  }

  onLinkClick(url: string) {
    window.open(url, '_blank');
  }
}
