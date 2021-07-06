import { Component, OnInit } from '@angular/core';
import {Data} from "../data";
import {DataService} from "../data.service";

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

  // NateData = new Data();


  type = 'line';
  NateData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "NBA Game Highs",
        data: [14, 3, 5, 16, 9, 13]
      }
    ]
  };


  GeoData = {
    labels: ["Freshman", "Sophomore", "Junior", "Senior"],
    datasets: [
      {
        label: "College Points Per Game",
        data: [10.8, 12.2, 10.9, 10.4]
      }
    ]
  };

  WenyenData = {
    labels: ["G League", "Sacramento Kings", "Portland Trailblazers", "New Orleans Pelicans"],
    datasets: [
      {
        label: "NBA Points Per Game (Per 36 Minutes)",
        data: [9.7, 11.2, 9.1, 10.8]
      }
    ]
  };

  TshiefuData = {
    labels: ["Freshman", "Sophomore", "Junior(RedShirt)", "Senior"],
    datasets: [
      {
        label: "Points Per 40 Minutes",
        data: [23.3, 9.1, 9.0, 0]
      }
    ]
  };



  options = {
    responsive: true,
    maintainAspectRatio: false
  };



  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    // this.getNatesData();

  }




  getNatesData(){
    this.dataservice.fetchDataById(86).subscribe(
      response =>{
        // this.NateData = response;
      }
    )
  }

  // getGeosData(){
  //   this.dataservice.fetchDataById()
  // }

}
