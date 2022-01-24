import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VijestPsgComponent } from './vijest-psg.component';

describe('VijestPsgComponent', () => {
  let component: VijestPsgComponent;
  let fixture: ComponentFixture<VijestPsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VijestPsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VijestPsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
