import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo.interface';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';

  setFilter(event: any) {
    this.filter = event.target?.value
  }

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService.listFromUser(userName)
      .subscribe(
        (photos) => { this.photos = photos },
        (error) => { console.log(error) }
      );
  }

}