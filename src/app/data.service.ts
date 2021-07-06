import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Clients} from "./client";
import {Players} from "./players";
import {Parents} from "./parent";
import {Data} from "./data";




@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }


  addPlayer(player:Players){
    let token = localStorage.getItem('access_token')
    return this.http.post<Players>(`http://localhost:8080/api/v1/players`,player);
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}

  }


  fetchClients(): Observable<Clients[]>{
    // let token = localStorage.getItem('access_token')
    return this.http.get<Clients[]>(`http://localhost:8080/api/v1/clients`,);
      // {headers: new HttpHeaders().set('Authorization', 'Bearer ')});
  }
  addClient(client:Clients): Observable<Clients>{
    let body = JSON.stringify(client)

    return this.http.post<Clients>(`http://localhost:8080/api/v1/clients`,body);
  }


  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/clients/${id}`)
  }


  // ENDPOINTS FOR PLAYERS


  fetchPlayers(): Observable<Players[]>{
    let token = localStorage.getItem('access_token')
    return this.http.get<Players[]>(`http://localhost:8080/api/v1/players`,);
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}

  }


  deletePlayer(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/players/${id}`)
  }


  addParent(id: number, parent: Parents): Observable<Parents> {
    return this.http.post<Parents>(`http://localhost:4200/api/v1/parents/${id}`, parent)
  }

  fetchParents(): Observable<Parents[]>{
    return this.http.get<Parents[]>(`http://localhost:8080/api/v1/parents`)
  }

  fetchDataById(id: number): Observable<Data> {
    let token = localStorage.getItem('access_token')
    return this.http.get<Data>(`http://localhost:8080/api/v1/data/${id}`)
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
  }

}
