import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datanew:any
  data: any
  statenew: any

  constructor(private  httpreq :  HttpDataService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.httpreq.get('/country/json').subscribe((res:any)=> {
    this.datanew = res.countries;
    console.log(res);
    })
  }
  post() {
    this.httpreq.post('/country/json',this.data).subscribe((res)=> {
    this.get();
    })
  }
  getStates() {
    this.httpreq.getStates('/states').subscribe((res:any)=> {
    this.statenew = res.data;
    console.log(res);
    // console.log(res.data.states)
    })
  }

}