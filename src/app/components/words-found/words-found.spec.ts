import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsFound } from './words-found';

describe('WordsFound', () => {
  let component: WordsFound;
  let fixture: ComponentFixture<WordsFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
