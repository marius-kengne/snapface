import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { throwError } from "rxjs";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

  private faceSnaps = [ 
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
        ).withLocation('Val d\'oise, 95300 Pontoise'),
        new FaceSnap(
          'Mont Blanc',
          'Le plus haut sommet des Alpes',
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          new Date(),
          160,
        ),
      ]; 
  
  getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps];
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap : FaceSnap | undefined = this.faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error("FaceSnap not found");
    }
    foundFaceSnap.snap(snapType);
  }

}