import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { StartupService } from '../../shared';
import * as _ from 'lodash';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(public fb: FormBuilder,
    public startupService: StartupService
  ) {

    this.startupService.on('authenticate').subscribe((data) => {
      console.log(`recive authenticate: ${JSON.stringify(data)}`);

      this.myAlert(data);

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

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {

      console.log(this.form.value);

      this.startupService.emit('authenticate', this.form.value);
    }
  }
}
