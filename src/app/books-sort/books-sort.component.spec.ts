import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSortComponent } from './books-sort.component';

describe('BooksSortComponent', () => {
  let component: BooksSortComponent;
  let fixture: ComponentFixture<BooksSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
