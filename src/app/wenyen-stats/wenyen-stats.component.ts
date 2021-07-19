import { Component, OnInit } from '@angular/core';
import {Stats} from "../stats";
import {DataService} from "../data.service";

@Component({
  selector: 'app-wenyen-stats',
  templateUrl: './wenyen-stats.component.html',
  styleUrls: ['./wenyen-stats.component.css']
})
export class WenyenStatsComponent implements OnInit {

 wenyenStats = new Stats();


 chart: any
 chart2: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1629117", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": "b1f5a5e06dmshc0511f3321317c0p132906jsn7fb69e629522",
    //     "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data =>
    //     console.log(this.stats = data))
    //
    //

    this.dataService.getWenyenChartData().subscribe(response =>{
      this.wenyenStats = response
      console.log(this.wenyenStats)

    })

  }


  getChartData(): any{
    // fetch("https://nba-stats4.p.rapidapi.com/per_game_regular_season/1629117", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": "b1f5a5e06dmshc0511f3321317c0p132906jsn7fb69e629522",
    //     "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data =>
    //     console.log(this.stats = data))
    this.chart = {
      type: 'bar',
      data: {
        labels: ["Points Per Game", "Assists Per Game", "Rebounds Per Game", "Turnovers Per Game", "Blocks Per Game"],
        datasets: [{
          label: '2020-2021 Stats',
          backgroundColor: 'rgba(0, 129, 214, 0.8)',
          data: [this.wenyenStats.careerPoints, this.wenyenStats.carrerAssists, this.wenyenStats.careerRebounds, this.wenyenStats.careerTurnovers, this.wenyenStats.careerBlocks]
        }
        ]
      }
    };

    this.chart2 = {
      type: 'bar',
      data: {
        labels: ["3 Point %", "Free Throw %", "Field Goal %"],
        datasets: [{
          label: '2020-2021 Shooting Percentages',
          backgroundColor: 'rgba(0, 129, 214, 0.8)',
          data: [this.wenyenStats.careerPercentageThree, this.wenyenStats.careerPercentageFreethrow, this.wenyenStats.careerPercentageFieldGoal]
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
  // chart = {
  //   type: 'bar',
  //   data: {
  //     labels: ["Points Per Game", "Assists Per Game", "Rebounds Per Game", "Steals Per Game", "Blocks Per Game"],
  //     datasets: [{
  //       label: '2020 Stats',
  //       backgroundColor: 'rgba(0, 129, 214, 0.8)',
  //       data: [this.stats.pts_per_game, this.stats.ast_per_game, this.stats.reb_per_game, this.stats.stl_per_game, this.stats.blk_per_game]
  //     }
  //     ]
  //   }
  // };
  //
  // chart = {
  //   type: 'bar',
  //   data: {
  //     labels: ["Points Per Game", "Assists Per Game", "Rebounds Per Game", "Steals Per Game", "Blocks Per Game"],
  //     datasets: [{
  //       label: '2020 Stats',
  //       backgroundColor: 'rgba(0, 129, 214, 0.8)',
  //       data: [this.stats.pts_per_game, this.stats.ast_per_game, this.stats.reb_per_game, this.stats.stl_per_game, this.stats.blk_per_game]
  //     }
  //     ]
  //   }
  // };

}
