import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
    selector: 'input[numbersOnly]'
})

export class OnlyNumberDirective {
    @Input() numbersOnly!: boolean;

    constructor(private _el: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
        if (this.numbersOnly) {
            const initalValue = this._el.nativeElement.value;

            this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
            if (initalValue !== this._el.nativeElement.value) {
                event.stopPropagation();
            }
        }
    }


}


