import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCursosComponent } from './listar-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosService } from '../services/cursos.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CoreModule } from 'src/app/core/core.module';

describe('ListarCursosComponent', () => {
  let component: ListarCursosComponent;
  let fixture: ComponentFixture<ListarCursosComponent>;

  let cursosService: CursosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCursosComponent ],
      imports: [
        ReactiveFormsModule,
        SharedModule,
        MatDialogModule,
        CoreModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
