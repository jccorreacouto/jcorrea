import { AbstractControl } from '@angular/forms';

export class Validations {

 /**
  * Valida email
  * @param controle input
  */
  public static ValidaEmail(controle: AbstractControl): any {
    const email: string = controle.value;
    // tslint:disable-next-line: max-line-length
    const validaEmail: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
      return null;
    } else if (validaEmail.test(email)) {
      return null;
    } else {
      return { valorInvalido: true };
    }
  }
}
