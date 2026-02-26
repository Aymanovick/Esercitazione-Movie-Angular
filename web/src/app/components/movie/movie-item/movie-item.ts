import { Component, InputSignal, input } from '@angular/core';
import { Movie } from '../../../models/Movie';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css',
})
export class MovieItem {
  movie: InputSignal<Movie> = input.required()
}
