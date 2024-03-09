import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  quoteSubject = new BehaviorSubject<any>(null);
  quote$ = this.quoteSubject.asObservable();

  quoteEESubject = new BehaviorSubject<any>(null);
  quoteEE$ = this.quoteEESubject.asObservable();

  quoteRPSubject = new BehaviorSubject<any>(null);
  quoteRP$ = this.quoteRPSubject.asObservable();

  quoteADSubject = new BehaviorSubject<any>(null);
  quoteAD$ = this.quoteADSubject.asObservable();

}
