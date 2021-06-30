import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Clients} from "./client";
import {Players} from "./players";
import {Parents} from "./parent";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

fetchClients(): Observable<Clients[]>{
return this.http.get<Clients[]>(`http://localhost:8080/api/v1/clients`);
}
addClient(client:Clients): Observable<Clients>{
    return this.http.post<Clients>(`http://localhost:8080/api/v1/clients`,client);
}


  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/clients/${id}`)
  }


  // ENDPOINTS FOR PLAYERS


  fetchPlayers(): Observable<Players[]>{
    return this.http.get<Players[]>(`http://localhost:8080/api/v1/players`);
  }

  addPlayer(player:Players): Observable<Players>{
    return this.http.post<Players>(`http://localhost:8080/api/v1/players`,player);
  }

  deletePlayer(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/players/${id}`)
  }


  addParent(id: number, parent: Parents): Observable<Parents> {
    return this.http.post<Parents>(`http://localhost:4200/api/v1/parents${id}`, parent)
  }
}
