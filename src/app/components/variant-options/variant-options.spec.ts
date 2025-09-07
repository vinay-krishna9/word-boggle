import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantOptions } from './variant-options';

describe('VariantOptions', () => {
  let component: VariantOptions;
  let fixture: ComponentFixture<VariantOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariantOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
