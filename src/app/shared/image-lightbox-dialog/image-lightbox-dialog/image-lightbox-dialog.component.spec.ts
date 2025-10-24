import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLightboxDialogComponent } from './image-lightbox-dialog.component';

describe('ImageLightboxDialogComponent', () => {
  let component: ImageLightboxDialogComponent;
  let fixture: ComponentFixture<ImageLightboxDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageLightboxDialogComponent]
    });
    fixture = TestBed.createComponent(ImageLightboxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
