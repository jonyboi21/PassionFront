import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Stats} from "../stats";

@Component({
  selector: 'app-nate-stats',
  templateUrl: './nate-stats.component.html',
  styleUrls: ['./nate-stats.component.css']
})
export class NateStatsComponent implements OnInit {

  nateData = new Stats()

  chart: any
  chart2: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNateChartData().subscribe(
      response => {
        this.nateData= response;
        console.log(this.nateData)
      }
    )

    // fetch("https://nba-player-individual-stats.p.rapidapi.com/players/lastname?lastname=Knight", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": "b1f5a5e06dmshc0511f3321317c0p132906jsn7fb69e629522",
    //     "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data =>
    //     this.nateData = data)
  }


  getChartData(): any {
    this.chart = {
      type: 'bar',
      data: {
        labels: ["Points Per Game", "Assists Per Game", "Rebounds Per Game", "Turnovers Per Game", "Blocks Per Game"],
        datasets: [{
          label: '2020-2021 Stats',
          backgroundColor: 'rgba(0, 129, 214, 0.8)',
          data: [this.nateData.careerPoints, this.nateData.carrerAssists, this.nateData.careerRebounds, this.nateData.careerTurnovers, this.nateData.careerBlocks]
        }
        ]
      }
    };

    this.chart2 = {
      type: 'bar',
      data: {
        labels: ["3 Point %", "Free Throw %", "Field Goal %"],
        datasets: [{
          label: '2020-2021 Stats',
          backgroundColor: 'rgba(0, 129, 214, 0.8)',
          data: [this.nateData.careerPercentageThree, this.nateData.careerPercentageFreethrow, this.nateData.careerPercentageFieldGoal]
        }
        ]
      }
    };


  }

  options: {
    legend: {
      display: false,
      position: 'top',
    }
  }


}
