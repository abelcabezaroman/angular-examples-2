import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGalleryComponent } from './form-gallery.component';

describe('FormGalleryComponent', () => {
  let component: FormGalleryComponent;
  let fixture: ComponentFixture<FormGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
