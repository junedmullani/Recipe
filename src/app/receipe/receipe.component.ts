import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  data;
  i=2;
  constructor(private service:ReceipeService) { }

  ngOnInit(): void {
  }
  getReciepe(receipe){
    this.service.getReciepeBySearch(receipe).subscribe(data=>{
      this.data=data;
      console.log(data);
    });
  }

  nextPage(receipe){
    //console.log(this.i++);
    this.service.nextPage(receipe,this.i++).subscribe(data=>{
      this.data=data;
      console.log(data);
      console.log(this.i);
      window.scrollTo(0, 0);
    });
    
  }

}
