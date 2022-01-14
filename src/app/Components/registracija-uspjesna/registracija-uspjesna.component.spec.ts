import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaUspjesnaComponent } from './registracija-uspjesna.component';

describe('RegistracijaUspjesnaComponent', () => {
  let component: RegistracijaUspjesnaComponent;
  let fixture: ComponentFixture<RegistracijaUspjesnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistracijaUspjesnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistracijaUspjesnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
