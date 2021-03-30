import { Injectable } from '@angular/core';
import { IMensagem } from '../model/mensagem';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  public enviarEmail(mensagem: IMensagem): void {
    console.log(mensagem);
  }

}
