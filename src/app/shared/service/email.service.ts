import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMensagem } from '../model/mensagem';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  public enviarEmail(mensagem: IMensagem): void {
    const remetente: string = mensagem.nome.concat(' - ').concat(mensagem.email);
    const titulo: string = mensagem.titulo.concat(' - ').concat(mensagem.telefone);
    Email.send({
      Host : environment.emailHost,
      Username : environment.emailUser,
      Password : environment.emailPassword,
      To : environment.emailTo,
      From : remetente,
      Subject : titulo,
      Body : mensagem.mensagem
    }).then(
      (message: string) => (message === 'OK') ? alert('Seu email foi enviado. Logo entraremos em contato. Obrigado!') : 'Desculpe, houve um erro. Podemos conversar por WhatsApp?'
    );
  }
}
