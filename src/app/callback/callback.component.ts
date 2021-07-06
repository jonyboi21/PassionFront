import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {AuthGuard} from "../auth.guard";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(){
  }
  ngOnInit(): void {
  }

}
