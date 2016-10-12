import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { StartupService, StorageService } from '../../shared';
import * as _ from 'lodash';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  input_title_email:string = "correo";
  input_title_password:string = "contraseña";
  button_title:string = "aceptar";
  login_title:string = "hotel eurobuilding";

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(public fb: FormBuilder,
    public startupService: StartupService,
    public storage: StorageService
  ) {

    this.startupService.get('authenticate').subscribe((data) => {
      console.log(`recive authenticate: ${ JSON.stringify(data) }`);

      this.myAlert(data);

      this.checkResponse(data);

    });

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  myAlert = (data) => {

    if (!_.isUndefined(data.error)) {
      alert(data.error);
    } else if (!_.isUndefined(data.status)) {
      alert(data.status);
    }
  };

  checkResponse = (data) => {
    if (!_.isUndefined(data.token)) {
      console.log(data.token);
      this.storage.put('token', data.token);
    }
  };

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {

      console.log(this.form.value);

      this.startupService.emit('authenticate', this.form.value);
    }
  }
}
