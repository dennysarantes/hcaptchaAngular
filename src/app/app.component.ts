import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifyService } from './Service/verify.service';
import { Payload } from './Model/payload';
import * as jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'captcha';
  loginForm!: FormGroup | any;
  ehValido : boolean = false;

  constructor(private formBuilder : FormBuilder,
              private verifyService : VerifyService
              ){
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
      captcha:['', Validators.required]
    });
  }

  ngOnInit() { }

  onVerify(token: string) {
    console.log('TOKEN: ' + token);
    const tokenX = jwt_decode.default(token) as Payload;
    console.log('Score: ' + tokenX.pd);

    this.ehValido = true;

      this.verifyService.verificaToken(token)
    .subscribe(validator => {
        console.log(validator);
    })

    alert('Ok!');
}

  onExpired(response: any) {

    console.log('Token expirado.');
    alert('exprirado');
}

  onError(error: any) {
    alert('Erro: ' + error);
}

  onSubmit(){
    console.log('Realizando login....');
}

}
