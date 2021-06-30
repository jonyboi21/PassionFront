import { Component, OnInit } from '@angular/core';
import {Clients} from "../client";
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {Parents} from "../parent";
import {Players} from "../players";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  clients: Clients[];
  players: Players[];

  constructor(private data: DataService, private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {

  }


  logOut(){
    this.authservice.logout();
  }
  deleteClient(id: number) {
    this.data.deleteClient(id).subscribe(
      response =>{
        this.getAllClients();
      }
    )
  }
  getAllClients(){
    this.data.fetchClients().subscribe(
      response =>{
        this.clients = response;
        console.log(this.clients)
      }
    );
  }

  getAllPlayers(){

    this.data.fetchPlayers().subscribe(
      response =>{
        this.players = response;
        console.log(this.players)
      });
  }


  deletePlayer(id: number) {
    this.data.deletePlayer(id).subscribe(
      response =>{
        // this.getAllPlayers();
      }
    )

  }
}
