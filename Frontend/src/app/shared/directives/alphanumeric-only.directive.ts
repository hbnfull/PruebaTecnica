import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'input[alphanumericOnly]'
})

export class AlphanumericOnlyDirective {
  @Input() alphanumericOnly!: boolean;

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    if (this.alphanumericOnly) {
      const initalValue = this._el.nativeElement.value;

      this._el.nativeElement.value = initalValue.replace(/[^A-Za-z0-9]/g, '');
      if (initalValue !== this._el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }
}


