import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, DatePipe, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [CommonModule, 
    NgStyle, 
    DatePipe, 
    UpperCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  standalone: true
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean
  snapButtonText!: string

  constructor() { }

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
    this.faceSnap.addSnap();
    this.snapButtonText = "Oops, un Snap!"
    this.userHasSnapped = true;
  }

  unSnap(): void {
    this.faceSnap.removeSnap();
      this.snapButtonText = "Oh Snap!";
      this.userHasSnapped = false;
  }

}
