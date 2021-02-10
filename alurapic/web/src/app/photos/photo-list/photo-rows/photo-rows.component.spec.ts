import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRowsComponent } from './photo-rows.component';

describe('PhotoRowsComponent', () => {
  let component: PhotoRowsComponent;
  let fixture: ComponentFixture<PhotoRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
