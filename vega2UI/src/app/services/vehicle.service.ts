import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }

  getMakes() {
    return this.http.get<any[]>('http://localhost:51376/api/makes');
  }

  getFeature() {
    return this.http.get<any[]>('http://localhost:51376/api/features');
  }
}
