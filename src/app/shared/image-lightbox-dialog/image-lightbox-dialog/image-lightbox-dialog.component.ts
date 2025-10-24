import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type LightboxData = {
  src: string;
  alt?: string;
  caption?: string;
};

@Component({
  selector: 'app-image-lightbox-dialog',
  templateUrl: './image-lightbox-dialog.component.html',
  styleUrls: ['./image-lightbox-dialog.component.scss'],
})
export class ImageLightboxDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ImageLightboxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LightboxData
  ) {}
}
