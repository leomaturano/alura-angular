import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    template: '<img class="img-thumbnail" [src]="photoUrl" [alt]="photoDescription">'
})
export class PhotoComponent {
    @Input()
    photoDescription = '';

    @Input()
    photoUrl = '';

}