import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
//NotfoundComponent dsplayed any time the user enters an URL not recognized, also allows the user to go back to te dash with a button
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
