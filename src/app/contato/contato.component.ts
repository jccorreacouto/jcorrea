import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IMensagem } from '../shared/model/mensagem';
import { EmailService } from '../shared/service/email.service';
import { environment } from 'src/environments/environment';
import { Validations } from '../shared/validator/validations';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  public whatsAppUrl: string = environment.whatsAppApi;

  public formContato: any = this.fb.group({
    nome: [''],
    email: ['', Validators.compose([Validations.ValidaEmail])],
    telefone: [''],
    titulo: ['', Validators.compose([Validators.minLength(2)])],
    mensagem: ['', Validators.compose([Validators.minLength(10)])]
  });

  constructor(private fb: FormBuilder, private mailService: EmailService) { }

  public enviarEmail(): void {
    const mensagem: IMensagem = {
      nome: this.formContato.controls.nome.value,
      email: this.formContato.controls.email.value,
      telefone: this.formContato.controls.telefone.value,
      titulo: this.formContato.controls.titulo.value,
      mensagem: this.formContato.controls.mensagem.value
    };
    this.mailService.enviarEmail(mensagem);
    this.limparCampos();
  }

  private limparCampos(): void {
    this.formContato.get('nome').setValue(undefined);
    this.formContato.get('email').setValue(undefined);
    this.formContato.get('telefone').setValue(undefined);
    this.formContato.get('titulo').setValue(undefined);
    this.formContato.get('mensagem').setValue(undefined);
  }

  public habilitar(): boolean {
    return (this.formContato.value.nome && this.formContato.value.email && this.formContato.value.telefone
              && this.formContato.value.titulo && this.formContato.value.mensagem);
  }

}
