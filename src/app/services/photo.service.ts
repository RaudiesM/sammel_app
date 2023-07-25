import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';

  constructor() {}

  public async getImage() {
    // Take a photo
    // console.log("photo");
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      //   resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      saveToGallery: true,
      allowEditing: false,
      width: 1000,
      height: 1000,
      quality: 30
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    // if(typeof savedImageFile.webviewPath === "string"){
    //   this.photos.unshift(savedImageFile);
    // }
    return savedImageFile;
    // Preferences.set({
    //   key: this.PHOTO_STORAGE,
    //   value: JSON.stringify(this.photos),
    // });
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
    if(photoList.value == null){
      photoList.value = "";
      // console.log("value is null");
    }
    this.photos = JSON.parse(photoList.value) || [];
    
    // Display the photo by reading into base64 format
    for (let photo of this.photos) {
        // Read each saved photo's data from the Filesystem
        const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
        });

        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  public async readImagesFromFilesystem(photo: UserPhoto){
    // Read saved photo's data from the Filesystem
    const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory: Directory.Data,
      });
      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    return photo;
  }


  private async savePicture(photo: Photo) { 
    // Convert photo to base64 format, required by Filesystem API to save
  const base64Data = await this.readAsBase64(photo);

  // Write the file to the data directory
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;
  }
  
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}

export interface UserPhoto {
  filepath: string;
  webviewPath: string | undefined;
}

