import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { By } from '@angular/platform-browser';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should disable start button if options are not selected', () => {
    const button = fixture.debugElement.query(By.css('.primary-button')).nativeElement;
    expect(button.disabled).toBeTrue();
  });

  it('should enable start button after selecting all options', () => {
    component.gameOptions = { players: 2, language: 'en', variant: '4' };
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.primary-button')).nativeElement;
    expect(button.disabled).toBeFalse();
  });
});
