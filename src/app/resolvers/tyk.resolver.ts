import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TykAPIService } from '../services/tyk-api.service';
import { Observable } from 'rxjs';
import { APIPolicyList } from '../modal/policy.modal';

@Injectable()
export class TykResolver implements Resolve<Observable<APIPolicyList>> {
  constructor(private tykService: TykAPIService) {}

  resolve() {
    return this.tykService.getPolicies();
  }
}