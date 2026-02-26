import { Component, InputSignal, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { StremingChannel } from '../../../models/StreamingChannel';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-modal.html',
  styleUrl: './movie-modal.css',
})
export class MovieModal {

  addMovieForm: FormGroup;

  channelList: InputSignal<StremingChannel[]> =
    input.required<StremingChannel[]>()

    constructor(private formBuilder: FormBuilder) {
      this.addMovieForm = this.formBuilder.group({
        title: [''],
        description: [''],
        streaming_channel: ['']
      });
    }
}
