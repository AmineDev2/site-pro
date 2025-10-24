// contact.service.ts
import emailjs from '@emailjs/browser';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class ContactService {
  send(payload: any): Promise<void> {
    return emailjs
      .send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        payload,
        { publicKey: environment.emailjs.publicKey }
      )
      .then(() => {});
  }
}
