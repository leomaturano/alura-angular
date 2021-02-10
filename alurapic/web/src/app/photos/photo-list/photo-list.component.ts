import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo.interface';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  setFilter(event: any) {
    // this.filter = event.target?.value
    this.debounce.next(event.target?.value)
  }

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);
    this.photos = this.activatedRoute.snapshot.data['photos'];
    // this.photos = this.activatedRoute.snapshot.data.photos; // mesma coisa que acima
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  load() {
    ++this.currentPage
    this.photoService.listFromUserPaginated(this.userName, this.currentPage).subscribe(
      photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      }
    )
  }

}
