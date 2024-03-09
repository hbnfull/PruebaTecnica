import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'input[alphabetOnly]'
})

export class AlphabetOnlyDirective {
  @Input() alphabetOnly!: boolean;

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    if (this.alphabetOnly) {
      const initalValue = this._el.nativeElement.value;

      this._el.nativeElement.value = initalValue.replace(/[^A-Za-z]/g, '');
      if (initalValue !== this._el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }
}
