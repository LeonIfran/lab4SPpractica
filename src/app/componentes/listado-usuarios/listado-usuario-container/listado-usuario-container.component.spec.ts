import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuarioContainerComponent } from './listado-usuario-container.component';

describe('ListadoUsuarioContainerComponent', () => {
  let component: ListadoUsuarioContainerComponent;
  let fixture: ComponentFixture<ListadoUsuarioContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoUsuarioContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuarioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
