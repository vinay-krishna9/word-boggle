import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageOptions } from './language-options';

describe('LanguageOptions', () => {
  let component: LanguageOptions;
  let fixture: ComponentFixture<LanguageOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
