import { Component, OnInit } from '@angular/core';
import { ball } from '../model/ball';
import { BallService } from '../service/ball.service';

@Component({
  selector: 'app-ball-list',
  templateUrl: './ball-list.component.html',
  styleUrls: ['./ball-list.component.css']
})
export class BallListComponent implements OnInit {
 
 title: string = 'Ball List';
 balls: ball[] = [];
	
  constructor(private bSvc: BallService) { }

  ngOnInit() {
   if (this.bSvc.ballList.length==0){
   let msg = this.bSvc.initializeList();
	this.balls = this.bSvc.ballList;						
   }
  }
}
