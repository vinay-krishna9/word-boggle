import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOptions } from './player-options';

describe('PlayerOptions', () => {
  let component: PlayerOptions;
  let fixture: ComponentFixture<PlayerOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
