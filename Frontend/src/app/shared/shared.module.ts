import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AlertComponent } from './components/alert/alert.component';
import { TabComponent } from './components/tab/tab.component';
import { RouterModule } from '@angular/router';
import { OnlyNumberDirective } from './directives/only-number'
import {AlphabetOnlyDirective} from './directives/alphabet-only.directive';
import {AlphanumericOnlyDirective} from './directives/alphanumeric-only.directive'
import { CurrencyInputDirective } from './directives/currency-input.directive';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    AlertComponent,
    TabComponent,
    OnlyNumberDirective,
    CurrencyInputDirective,
    AlphabetOnlyDirective,
    AlphanumericOnlyDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
   ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    AlertComponent,
    TabComponent,
    OnlyNumberDirective,
    AlphabetOnlyDirective,
    AlphanumericOnlyDirective,
    CurrencyInputDirective
  ],
  providers: [CurrencyPipe],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
