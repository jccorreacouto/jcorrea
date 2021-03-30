import { Injectable } from '@angular/core';
import { IMensagem } from '../model/mensagem';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  public enviarEmail(mensagem: IMensagem): void {
    Email.send({
      Host : 'smtp.gmail.com',
      Username : '<EMAIL_GMAIL>',
      Password : '<SENHA_GMAIL>',
      To : 'jcorrearafiapacking@gmail.com',
      From : mensagem.email,
      Subject : mensagem.titulo,
      Body : mensagem.mensagem
    }).then(
      alert('Seu email foi enviado. Logo entraremos em contato. Obrigado!')
    );
  }
}
