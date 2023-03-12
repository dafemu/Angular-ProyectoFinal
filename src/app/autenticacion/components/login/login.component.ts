import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      esAdmin: new FormControl(false)
    });
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formularioLogin.value.usuario,
      contrasena: this.formularioLogin.value.contrasena,
      esAdmin: this.formularioLogin.value.esAdmin
    }
    this.loginService.login(usuario);
    this.router.navigate(['inicio']);
  }
}
