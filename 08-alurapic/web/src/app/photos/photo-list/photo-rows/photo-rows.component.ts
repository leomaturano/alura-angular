import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo.interface';

@Component({
  selector: 'ap-photo-rows',
  templateUrl: './photo-rows.component.html',
  styleUrls: ['./photo-rows.component.css']
})
export class PhotoRowsComponent implements OnInit, OnChanges {

  @Input() photos: Photo[] = [];

  rows: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
      console.log('this.rows=', this.rows)
      console.log('this.photos', this.photos)
    }
  }

  groupColumns(photos: Photo[]): any[] {
    const newRows: any[] = [];
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3))
    }
    return newRows;
  }
}
