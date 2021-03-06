import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ApiUrl : string = 'https://restcountries.com/v2';

  constructor( private http : HttpClient ) { }

  buscarPais ( termino : string ) : Observable<Country[]>
  {
    const url = `${ this.ApiUrl }/name/${termino}`;

    return this.http.get<Country[]>( url );
  }

  buscarCapital ( termino : string ) : Observable<Country[]> {
    const url = `${this.ApiUrl}/capital/${termino}`

    return this.http.get<Country[]>( url );
  }
  
  getCountryByCode ( termino : string ) : Observable<Country> {
    const url = `${this.ApiUrl}/alpha/${termino}`

    return this.http.get<Country>( url );
  }

}
