import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../models/carta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private api_buscarCarta = `${environment.API}archetype=`;

  constructor(private http: HttpClient) { }

  get_cart(name: string): Observable<Carta>{
    return this.http.get<Carta>(this.api_buscarCarta + name);
  }
}
