import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IMensagem } from '../shared/model/mensagem';
import { EmailService } from '../shared/service/email.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  public formContato: any = this.fb.group({
    email: [''],
    titulo: ['', Validators.compose([Validators.minLength(2)])],
    mensagem: ['', Validators.compose([Validators.minLength(10)])]
  });

  constructor(private fb: FormBuilder, private mailService: EmailService) { }

  public enviarEmail(): void {
    const mensagem: IMensagem = {
      email: this.formContato.controls.email.value,
      titulo: this.formContato.controls.titulo.value,
      mensagem: this.formContato.controls.mensagem.value
    };
    this.mailService.enviarEmail(mensagem);
    this.limparCampos();
  }

  private limparCampos(): void {
    this.formContato.get('email').setValue(undefined);
    this.formContato.get('titulo').setValue(undefined);
    this.formContato.get('mensagem').setValue(undefined);
  }

  public habilitar(): boolean {
    return (this.formContato.value.email && this.formContato.value.titulo && this.formContato.value.mensagem);
  }

}
