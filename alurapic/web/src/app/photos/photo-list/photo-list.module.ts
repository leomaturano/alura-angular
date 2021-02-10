import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoRowsComponent } from './photo-rows/photo-rows.component';


@NgModule({
    declarations: [
        PhotoListComponent,
        PhotoRowsComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe,
    ],
    imports: [
        CommonModule,
        PhotoModule,
    ],
    exports: [],
})
export class PhotoListModule { }