import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StateStorageService } from '@services/state-storage.service';

export const guardsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storeService = inject(StateStorageService);
  if(storeService.getAuthenticationToken()){
    return true;
  }
  else{
    // router.navigate(['login']);
    return true;
  }
};
