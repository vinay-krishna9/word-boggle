import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
})
export class Timer implements OnInit, OnDestroy {
  @Input() durationSeconds: number = 180; // default 3 minutes
  @Output() timeUp = new EventEmitter<void>();

  remainingSeconds: number = this.durationSeconds;
  private intervalId?: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    this.remainingSeconds = this.durationSeconds;
    this.intervalId = setInterval(() => {
      this.remainingSeconds--;
      if (this.remainingSeconds <= 0) {
        clearInterval(this.intervalId);
        this.timeUp.emit();
      }
    }, 1000);
  }

  formatTime(): string {
    const min = Math.floor(this.remainingSeconds / 60);
    const sec = this.remainingSeconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  reset() {
    clearInterval(this.intervalId);
    this.startTimer();
  }
}
