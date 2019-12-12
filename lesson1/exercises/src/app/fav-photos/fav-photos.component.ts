import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.thesprucecrafts.com/thmb/pL3jukiNt9d2kf4kd6Jtjtq9kZk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90339990-586b54d73df78ce2c33d2deb.jpg';
  image3 = 'https://www.papajohns.com/static-assets/a/images/papa-johns-logo-201905211749.png';

  constructor() { }

  ngOnInit() {
  }

}