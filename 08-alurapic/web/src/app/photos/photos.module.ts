import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoRowComponent } from './photo-list/photo-row/photo-row.component';
import { PhotoRowsComponent } from './photo-list/photo-rows/photo-rows.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotoRowComponent,
        PhotoRowsComponent,
        FilterByDescriptionPipe,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        PhotoComponent,
        PhotoListComponent,
    ],
    providers: [

    ],
})
export class PhotosModule { }
