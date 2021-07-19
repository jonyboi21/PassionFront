import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WenyenStatsComponent } from './wenyen-stats.component';

describe('WenyenStatsComponent', () => {
  let component: WenyenStatsComponent;
  let fixture: ComponentFixture<WenyenStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WenyenStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WenyenStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
