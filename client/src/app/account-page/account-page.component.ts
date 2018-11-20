import { Component, OnInit } from '@angular/core';
// import service and "observable" so that we can display results
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    // set title of page
    // insert title code here
    // api call to get user data, subscribe, and set users$ to the object returned
    this.data.getUser().subscribe(
      data => {this.users$ = data;}
    );
  }

}
