import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCartaComponent } from './buscar-carta.component';

describe('BuscarCartaComponent', () => {
  let component: BuscarCartaComponent;
  let fixture: ComponentFixture<BuscarCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
