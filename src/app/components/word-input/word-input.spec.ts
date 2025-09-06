import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInput } from './word-input';

describe('WordInput', () => {
  let component: WordInput;
  let fixture: ComponentFixture<WordInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
