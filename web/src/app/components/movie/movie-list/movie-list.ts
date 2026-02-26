import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { MovieApi } from './service/movie-api';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit, OnDestroy {
  movieList!: Movie[];
  private subscription: Subscription = new Subscription();

  constructor(private api: MovieApi) {}

  ngOnInit(): void {
    this.onGetMovieList();
  }

  onGetMovieList(): void {
    this.subscription.add(
      this.api.getMovieList().subscribe({
        next: (movieList: Movie[]): void => {
          this.movieList = movieList;
        },
        error: (e: HttpErrorResponse) => {
          throw Error(
            `Cannot connect to API: Error: ${e.status} - ${e.message}`
          );
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
