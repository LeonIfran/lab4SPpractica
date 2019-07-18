import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriasProfesorLazyComponent } from './listado-materias-profesor-lazy.component';

describe('ListadoMateriasProfesorLazyComponent', () => {
  let component: ListadoMateriasProfesorLazyComponent;
  let fixture: ComponentFixture<ListadoMateriasProfesorLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriasProfesorLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriasProfesorLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
