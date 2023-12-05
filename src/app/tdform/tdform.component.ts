import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss'],
})
export class TdformComponent implements OnInit {
  userForm = {
    defUserName: '',
    email: '',
    question: '',
  };

  generi = [
    { label: 'uomo', value: 'uomo' },
    { label: 'donna', value: 'donna' },
  ];

  risposta = '';

  user: any = {
    username: '',
    email: '',
    secret: '',
    risposta: '',
    genere: '',
  };
  constructor() {}

  @ViewChild('form', { static: true }) form!: NgForm;

  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log('Stato del form: ', status);
    });
  }

  generaUser() {
    this.form.form.patchValue({
      //il patchValue : metteremo un button che chiameremo genera user e con il click binderà i valori nei campi user name e email
      //form.form = primo ngForm secondo è la proprietà (keyword)
      userInfo: {
        email: 'pippo@pippo.com',
        username: 'pippo',
      },
    });
  }
  submit() {
    console.log('Form invito: ', this.form);
    this.user.username = this.form.value.userInfo.username; //user info è nel metodo generaUser(), user è in cima
    this.user.email = this.form.value.userInfo.email;
    this.user.secret = this.form.value.userInfo.secret;
    this.user.risposta = this.form.value.userInfo.risposta;
    this.user.genere = this.form.value.userInfo.genere;
  }
}
