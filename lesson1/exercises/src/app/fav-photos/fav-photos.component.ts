import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Awesome Photos';
  image1 = 'https://assets-prd.ignimgs.com/2021/12/14/leagueoflegends-1639513774570.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/1/1c/Diablo_IV_cover_art.png';
  image3 = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_34.jpg';

  constructor() { }

  ngOnInit() {
  }

}