import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, CurrencyPipe, DatePipe, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  imports: [CommonModule, 
    NgStyle, 
    DatePipe, 
    UpperCasePipe,
    ],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  standalone: true
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean
  snapButtonText!: string
  myNumber: number = 4821.24;

  constructor(private faceSnapService: FaceSnapsService) { }

  ngOnInit(): void {
    this.userHasSnapped = false
    this.snapButtonText = "Oh Snap!"
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    }else {
      this.snap();
    }
  }

  snap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = "Oops, un Snap!"
    this.userHasSnapped = true;
  }

  unSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = "Oh Snap!";
    this.userHasSnapped = false;
  }

}
