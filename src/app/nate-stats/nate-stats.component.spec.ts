import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NateStatsComponent } from './nate-stats.component';

describe('NateStatsComponent', () => {
  let component: NateStatsComponent;
  let fixture: ComponentFixture<NateStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NateStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NateStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
