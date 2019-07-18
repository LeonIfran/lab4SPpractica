import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLazyComponent } from './registrar-lazy.component';

describe('RegistrarLazyComponent', () => {
  let component: RegistrarLazyComponent;
  let fixture: ComponentFixture<RegistrarLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
