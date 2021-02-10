import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from './photo.interface';

const API_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    constructor(private httpCliente: HttpClient) { }

    listFromUser(userName: string): Observable<Photo[]> {
        return this.httpCliente.get<Photo[]>(`${API_URL}/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.httpCliente
            .get<Photo[]>(`${API_URL}/${userName}/photos`, { params });
    }
}
