import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(){
  }

  public draw(){
    console.log('inside draw');

    html2canvas(document.querySelector('#my-node')).then(canvas => {
      document.body.appendChild(canvas);
    }).then(() => {
      const canvas = document.querySelector('canvas');
      canvas.style.display = 'none';
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const a = document.createElement('a');
      a.setAttribute('download', 'myImage.png');
      console.log('dataUrl:', image);
      a.setAttribute('href', image);
      a.click();
    });
  }
}
