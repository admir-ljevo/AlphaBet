import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNovostiComponent } from './home-novosti.component';

describe('HomeNovostiComponent', () => {
  let component: HomeNovostiComponent;
  let fixture: ComponentFixture<HomeNovostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNovostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNovostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
