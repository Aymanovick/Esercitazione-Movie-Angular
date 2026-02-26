import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie } from '../../../../models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {

  readonly API_URL: string = 'http://localhost:8000/api/v1/movies'
  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_URL}/movies/`)
  }

  deleteMovie(movieId: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.API_URL}/movies/${movieId}/`)
  }
}
