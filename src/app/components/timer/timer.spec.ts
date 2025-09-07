import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Timer } from './timer';

describe('Timer', () => {
  let component: Timer;
  let fixture: ComponentFixture<Timer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timer],
    }).compileComponents();

    fixture = TestBed.createComponent(Timer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should start at 180 seconds', () => {
    expect(component.durationSeconds).toBe(180);
  });

  it('should count down every second', fakeAsync(() => {
    component.startTimer();
    tick(1000);
    expect(component.remainingSeconds).toBe(179);
    tick(2000);
    expect(component.remainingSeconds).toBe(177);
  }));
});
