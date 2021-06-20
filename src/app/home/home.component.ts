import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public produto1 = './../../assets/imgs/produto1.jpeg';
  public produto2 = './../../assets/imgs/produto2.jpeg';
  public produto3 = './../../assets/imgs/produto3.jpeg';
  public produto4 = './../../assets/imgs/produto4.jpeg';
  public produto5 = './../../assets/imgs/produto5.jpeg';
  public produto6 = './../../assets/imgs/produto6.jpeg';
  public produto7 = './../../assets/imgs/produto7.jpeg';
  public produto8 = './../../assets/imgs/produto8.jpeg';
  public produto9 = './../../assets/imgs/produto9.jpeg';
  public produto10 = './../../assets/imgs/produto10.jpeg';
  public produto11 = './../../assets/imgs/produto11.jpeg';
  public produto12 = './../../assets/imgs/produto12.jpeg';

  public googleMapsUrl: string = environment.googleMapsUrl;

  public whatsAppUrl: string = environment.whatsAppApi;

  public gmail: string = 'mailto:' + environment.emailTo;

  public instagramUrl: string = environment.instagramUrl;

  constructor(private lightbox: Lightbox) { }

  public open(img: any): void {
    const srcImg: string = this.getImage(Number(img));
    const album = [
      {src: srcImg, caption: undefined, thumb: undefined}
    ];
    this.lightbox.open(album, 0);
  }

  public close(): void {
    this.lightbox.close();
  }

  private getImage(nr: number): any {
    switch (nr) {
      case 1:
        return this.produto1;
      case 2:
        return this.produto2;
      case 3:
        return this.produto3;
      case 4:
        return this.produto4;
      case 5:
        return this.produto5;
      case 6:
        return this.produto6;
      case 7:
        return this.produto7;
      case 8:
        return this.produto8;
      case 9:
        return this.produto9;
      case 10:
        return this.produto10;
      case 11:
        return this.produto11;
      case 12:
        return this.produto12;
    }
  }

}
