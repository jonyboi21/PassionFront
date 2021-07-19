import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Clients} from "./client";
import {Players} from "./players";
import {Parents} from "./parent";
import {Data} from "./data";
import {Stats} from "./stats";




@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient, private httpClient: HttpClient) { }


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



  getChartData(): Stats{
     var stats = new Stats()
    fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1629117", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b1f5a5e06dmshc0511f3321317c0p132906jsn7fb69e629522",
        "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(data =>
      stats = data)

    return stats
  }


  getWenyenChartData(): Observable<Stats> {
    return this.httpClient.get<Stats>(`https://nba-player-individual-stats.p.rapidapi.com/players/299?rapidapi-key=b1f5a5e06dmshc0511f3321317c0p132906jsn7fb69e629522`)
  }


  getNateChartData(): Observable<Stats>{
    return this.httpClient.get<Stats>(`https://nba-player-individual-stats.p.rapidapi.com/players/11?rapidapi-key=b1f5a5e06dmshc0511f3321317c0p132906jsn7fb69e629522`)
  }

}
