import { Component, signal, OnDestroy, OnInit, WritableSignal } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { MovieApi } from './service/movie-api';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { StreamingChannel } from '../../../models/StreamingChannel';
import { MovieItem } from '../movie-item/movie-item';
import { MovieModal } from '../movie-modal/movie-modal';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieItem, MovieModal],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit, OnDestroy {
  movieList!: Movie[];
  private subscription: Subscription = new Subscription();
  channelList:WritableSignal<StreamingChannel[]>=signal<StreamingChannel[]>(new Array<StreamingChannel>());

  constructor(private api: MovieApi) {}

  ngOnInit(): void {
    this.onGetMovieList();
    this.onGetChannelList();
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

  onDeleteMovie(movieId: number): void {
    this.subscription.add(
      this.api.deleteMovie(movieId).subscribe({
        error: (e: HttpErrorResponse) => {
        throw Error(
          `Cannot connect to API: Error: ${e.status} - ${e.message}`
        );
        },
        complete: () => {
          this.onGetMovieList();
        }
      })
    );
  }

  onAddMovie(movie: Movie) {
    console.log('onAddMovie called:', movie);
    this.subscription.add(
      this.api.addMovie(movie).subscribe({
        error: (e: HttpErrorResponse) => {
          console.log('Error details:', JSON.stringify(e.error))
        },
        complete: (): void => {
          this.onGetMovieList();
        }
      })
    );
  }

  onGetChannelList(): void {
    this.subscription.add(
      this.api.getChannelList().subscribe({
        next: (channelList: StreamingChannel[]) => {
          this.channelList.set(channelList);
        },
        error: (e: HttpErrorResponse) => {
          throw new Error(`Cannot connect to API: Error: ${e.status} - ${e.message}`);
        }
      })
    );
  }

}
