import { Directive, HostListener, ElementRef, OnInit, Input, AfterViewChecked } from "@angular/core";
import { CurrencyPipe } from '@angular/common';

@Directive({ selector: "[currencyInput]" })
export class CurrencyInputDirective implements OnInit, AfterViewChecked  {

  private el: HTMLInputElement;
  private digitRegex: RegExp;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
    this.digitRegex = new RegExp(this.regexString(), 'g');
    this.setRegex();
  }

  @Input()
  set maxDigits(maxDigits: number) {
    this.setRegex(maxDigits);
  }

  private regexString(max?: number) {
    const maxStr = max ? `{0,${max}}` : `+`;
    return `^(\\d${maxStr}(\\.\\d{0,2})?|\\.\\d{0,2})$`
  }

  private setRegex(maxDigits?: number) {
    this.digitRegex = new RegExp(this.regexString(maxDigits), 'g')
  }

  ngOnInit() {
    if (this.el.value) {
      setTimeout(() => {
        this.el.value = this.currencyPipe.transform(this.el.value, 'USD') || '';
      }, 10);
    }
  }

  ngAfterViewChecked() {
    
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value: string) {
    // on focus remove currency formatting
    this.el.value = value.replace(/[^0-9.]+/g, '')
    this.el.select();
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value: string) {
    // on blur, add currency formatting
    this.el.value = this.currencyPipe.transform(value, 'USD') || '';
  }

  @HostListener("keydown.control.z", ["$event.target.value"])
  onUndo(value: string) {
    this.el.value = '';
  }

  // variable to store last valid input
  private lastValid = '';
  @HostListener('input', ['$event'])
  onInput(event: Event ) {
    const target = event.target as HTMLInputElement;
    // on input, run regex to only allow certain characters and format
    const cleanValue = (target.value.match(this.digitRegex) || []).join('')
    if (cleanValue || !target.value)
      this.lastValid = cleanValue

    target.value = cleanValue || this.lastValid
  }
}
