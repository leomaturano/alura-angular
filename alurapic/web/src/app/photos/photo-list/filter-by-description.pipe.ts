import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo.interface';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], description: string): Photo[] {
    const descriptionQuery = description.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter((photo) =>
        photo.description.toLowerCase().includes(descriptionQuery)
      )
    }

    return photos;
  }

}
