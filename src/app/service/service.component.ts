import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  data:any;
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(){
    this.apiService.fetchData().subscribe(res =>{
      this.data = res;
      // console.log(res);
      
    })
  }
}
