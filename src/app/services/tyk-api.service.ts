import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { APIModal } from '../modal/api.modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIPolicyList } from '../modal/policy.modal';
import { KeyList } from '../modal/keylist.modal';
import { APIKey } from '../modal/key.modal';

@Injectable({
  providedIn: 'root'
})
export class TykAPIService {

  private TYK_REST_API = 'http://localhost:4200/tyk';
  private TYK_DASHBOARD_API = 'http://localhost:4200/api/portal';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-tyk-authorization': '352d20ee67be67f6340b4c0605b044b7'
    })
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': '88e12ba793204880449b7c2f6e14c3b9'
    })
  };

  constructor(private http: HttpClient) { }

  getAPIList(): Observable<APIModal[]> {
    return this.http.get<APIModal[]>(this.TYK_REST_API + "/apis", this.httpOptions)
  }

  getPolicies(): Observable<APIPolicyList> {
    return this.http.get<APIPolicyList>(this.TYK_DASHBOARD_API + "/policies", this.httpOptions2)
  }

  getKeyIdList(): Observable<KeyList> {
    return this.http.get<KeyList>(this.TYK_REST_API + "/keys", this.httpOptions)
  }

  getKey(key: string): Observable<APIKey> {
    return this.http.get<APIKey>(this.TYK_REST_API + "/keys/" + key, this.httpOptions)
  }
}
