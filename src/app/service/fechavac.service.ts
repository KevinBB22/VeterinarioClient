import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../model/generic';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { IFechavac, IFechavac2Form, IFechavac2Send } from '../model/fechavac-interface'


@Injectable({
  providedIn: 'root'
})
export class FechavacService {

  private entityURL = '/fechavac';
  url: string = ""

  constructor(
    private oHttp: HttpClient
    
  ) { 
    this.url = `${API_URL}${this.entityURL}`;
  }

  getFechavacPlist(page: number, size: number, termino: string,id_tipovacuna: number,id_animal: number ,
    strSortField: string, strOrderDirection: string): Observable<IPage<IFechavac>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_tipovacuna != 0) {
        params = params.set("tipovacuna", id_tipovacuna);
      }
      if (id_animal != 0) {
        params = params.set("animal", id_animal);
      }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IFechavac>>("http://localhost:8082/fechavac", {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<IFechavac> {
    return this.oHttp.get<IFechavac>(this.url + "/" + id , {withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id , {withCredentials:true});
  }

  updateOne(oFechavac2Send: IFechavac2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oFechavac2Send , {withCredentials:true});
  }

  newOne(oFechavac2Send: IFechavac2Send): Observable<number> {       
    return this.oHttp.post<number>(this.url + '/' , oFechavac2Send, {withCredentials:true});
  }

  getCountUsuarios(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

}



