import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor (private httpService: HttpClient) { }
  arrTowns: string [];

  getTowns() {
    this.httpService.get('http://ukpubs.co.uk/json/towns.php').subscribe(
      data => {
        this.arrTowns = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  ngOnInit () {
  }

}
