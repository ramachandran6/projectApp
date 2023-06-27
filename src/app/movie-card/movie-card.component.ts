import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  like: number = 0;
  @Input() movies: any = [];

  deleteMovie(movieName: string) {
    this.movies = this.movies.filter((movie: any) => movie.name !== movieName);
  }

  infoMovie(i: number) {
    this.router.navigate([`info/${i}`]);
  }
}
