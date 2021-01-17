import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Video } from './video';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  // private subscription: Subscription;

  title = 'mall-monitor';
  data = Video.data;
  density = 0;
  capacity = "0%";
  max_density = 0;
  max_capacity = "0%";
  matched_people = 0;
  detected_accessories: any;
  mean_confidence = "0%";
  max_confidence="0%";
  count = 0;

  constructor() { }

  ngOnInit(): void {
    this.count = this.data.length;

  }

  ngAfterViewInit(){  
   this.changeVals();
  }

  increase(){
    this.count++;
  }



  changeVals(){
    let i = 0;
    let interval = setInterval(()=>{
      this.density = this.data[i].Current_Density;
      this.capacity = this.data[i].Current_Capacity;
      this.detected_accessories = 0;
      this.matched_people = this.data[i].Matched_People;
      this.max_capacity = this.data[i].Allowed_Max_Capacity;
      this.max_confidence = this.data[i].Maximum_Confidence;
      this.mean_confidence = this.data[i].Mean_Confidence;
      i = i + 1;
      if(i == this.count){
        clearInterval(interval);
      }
    },5000);
  }

}
