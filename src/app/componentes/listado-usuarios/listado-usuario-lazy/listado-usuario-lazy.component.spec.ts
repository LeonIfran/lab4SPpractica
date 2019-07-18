import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuarioLazyComponent } from './listado-usuario-lazy.component';

describe('ListadoUsuarioLazyComponent', () => {
  let component: ListadoUsuarioLazyComponent;
  let fixture: ComponentFixture<ListadoUsuarioLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoUsuarioLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuarioLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
