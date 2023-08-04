import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookmarkComponent } from './create-bookmark.component';

describe('CreateBookmarkComponent', () => {
  let component: CreateBookmarkComponent;
  let fixture: ComponentFixture<CreateBookmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBookmarkComponent]
    });
    fixture = TestBed.createComponent(CreateBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
