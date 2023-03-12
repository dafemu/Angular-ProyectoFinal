import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  formularioAgregarCurso!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.formularioAgregarCurso = new FormGroup({
      comision : new FormControl(''),
      fechaFin: new FormControl(''),
      fechaInicio: new FormControl(''),
      inscripcionAbierta: new FormControl(false),
      nombre: new FormControl(''),
      profesor: new FormControl({}),
    });
  }
}
