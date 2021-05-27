import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit(): void {}

  goToSubmitProfile(): void {
    this.router.navigate(["/submit-profile"]);
  }

  goToProfileList(): void {
    this.router.navigate(["/profiles"]);
  }
}
