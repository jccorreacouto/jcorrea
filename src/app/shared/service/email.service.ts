import { Injectable } from '@angular/core';
import { Message, MessageHeaders, SMTPClient } from 'emailjs';
import { environment } from 'src/environments/environment';
import { IMensagem } from '../model/mensagem';

const client = new SMTPClient({
  user: environment.emailUser,
  password: environment.emailPassword,
  host: environment.emailHost,
  ssl: false,
});

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  public enviarEmail(mensagem: IMensagem): void {
    const emailHeader: MessageHeaders = {
      subject: mensagem.titulo,
      text: mensagem.mensagem,
      from: mensagem.email,
      date: new Date().getDate.toString(),
      to: environment.emailTo,
      cc: mensagem.email,
      bcc: undefined,
      attachment: undefined,
      'content-type': 'text/html; charset=UTF-8',
      'message-id': new Date().getTime().toString(),
      'return-path': undefined
    };
    const email: Message = new Message(emailHeader);
    client.send(email, (err, message) => { console.log(err || message); });
  }

}
