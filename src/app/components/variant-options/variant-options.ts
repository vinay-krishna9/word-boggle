import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-variant-options',
  imports: [],
  templateUrl: './variant-options.html',
  styleUrl: './variant-options.scss',
})
export class VariantOptions {
  @Output() variant = new EventEmitter();

  variants = [
    { name: '4X4', value: '4' },
    { name: '5X5', value: '5' },
  ];
  selectedVariant!: string;

  selectVariant(variant: string) {
    this.selectedVariant = variant;
    this.variant.emit(this.selectedVariant);
  }
}
