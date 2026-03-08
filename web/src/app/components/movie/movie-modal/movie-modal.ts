import { Component, EventEmitter, InputSignal, Output, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { StreamingChannel } from '../../../models/StreamingChannel';
import { Movie } from '../../../models/Movie';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-modal.html',
  styleUrl: './movie-modal.css',
})
export class MovieModal {

  addMovieForm: FormGroup;

  channelList: InputSignal<StreamingChannel[]> =
    input.required<StreamingChannel[]>()

  @Output() addMovieEvent: EventEmitter<Movie> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
      this.addMovieForm = this.formBuilder.group({
        title: [''],
        description: [''],
        director: [''],
        streaming_channel: ['---'],
      });
    }

    onSubmit(): void {
      console.log('Form value:', this.addMovieForm.value);
      this.addMovieEvent.emit(this.addMovieForm.value);
    };
}
