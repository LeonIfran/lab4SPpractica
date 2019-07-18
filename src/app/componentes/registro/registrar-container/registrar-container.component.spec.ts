import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarContainerComponent } from './registrar-container.component';

describe('RegistrarContainerComponent', () => {
  let component: RegistrarContainerComponent;
  let fixture: ComponentFixture<RegistrarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
