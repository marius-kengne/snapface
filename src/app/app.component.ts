import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})

export class AppComponent implements OnInit{

  title = 'snapface';

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {

    this.faceSnaps = [ 
      new FaceSnap(
        'Archibald',
        'Mon facesnap de toujours',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnap(
        'Three Rock Mountain',
        'Un magnifique sommet',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        new Date(),
        0
      ),
      new FaceSnap(
        'Mont Blanc',
        'Le plus haut sommet des Alpes',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        new Date(),
        160,
      ),
    ]; 

    this.faceSnaps[1].setLocation('Val d oise');
  }

  trackByTitle(index: number, item: any) {
    return item.title;
  }
}
