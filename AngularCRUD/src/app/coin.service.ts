import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {

  result: any;
  constructor(private http: HttpClient) {}

  uri_base = 'http://35.227.59.176:8091'

  addCoin(codigo, nombre) {
    const uri = this.uri_base + '/api/products';
    const obj = {
      codigo: codigo,
      nombre: nombre 
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getCoins() {
    //const uri = 'http://localhost:4000/coins';
    const uri = this.uri_base + '/api/products';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCoin(id) {
    const uri = this.uri_base + '/api/products/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCoin(codigo, nombre, id) {
    const uri = this.uri_base + '/api/products/' + id;

    const obj = {
      codigo: codigo,
      nombre: nombre
    };
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCoin(id) {
    const uri = this.uri_base + '/api/products/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              return res;
            });
  }
}
