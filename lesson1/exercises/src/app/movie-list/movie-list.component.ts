import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Manchurian Candidate', 'Oceans 8', '2001: A Space Oddysey', 'Indiana Jones and the Temple of Doom'];

   constructor() { }

   ngOnInit() {
   }

}
