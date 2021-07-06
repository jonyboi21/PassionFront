import {Component, Inject, OnInit} from '@angular/core';
import {Clients} from "../client";
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {Players} from "../players";
import {DOCUMENT} from "@angular/common";
import {FormGroup, FormControl,Validator} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  client = new Clients();
  // player = new Players();
  playerForm: FormGroup



  constructor(private data: DataService, private router: Router,@Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {

    this.initForm()
  }

  private initForm(){
    this.playerForm = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl(),
      'email': new FormControl(),
      'age': new FormControl(),
      'heightFeet': new FormControl(),
      'heightInches': new FormControl(),
      'weight': new FormControl(),
      'parent': new FormGroup({
        'id': new FormControl(),
        'parentName': new FormControl(),
        'parentEmail': new FormControl(),
        'phoneNumber': new FormControl(),
        'streetName': new FormControl(),
        'city': new FormControl(),
        'state': new FormControl(),
        'zip': new FormControl(),
        'playerId': new FormControl()
      })
    });
  }



  submitContactButton() {
this.data.addClient(this.client)
  .subscribe(response =>{
    this._document.defaultView.location.reload(); })
  }



  submitPlayerButton() {
this.data.addPlayer(this.playerForm.getRawValue())
  .subscribe( response =>{
    this._document.defaultView.location.reload(); }
  );
  }


}

