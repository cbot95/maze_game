import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor() { }

  currRoom;
  roomList = ['Room A', 'Room B', 'Room C', 'Room D'];
  roomA = false;
  roomB = false;
  roomC = false;
  roomD = false;


  ngOnInit() {
   this.currRoom = (this.roomList[Math.floor(Math.random() * this.roomList.length)]);
   this.roomNav();
  }

  roomNav() {
    switch (this.currRoom) {
      case 'Room A':
        this.roomA = true;
        break;
      case 'Room B':
        this.roomB = true;
        break;
      case 'Room C':
        this.roomC = true;
        break;
      case 'Room D':
        this.roomD = true;
        break;
    }

  }

  // Passage Navigation

  northPsg() {
    switch (this.currRoom) {
      case 'Room A':
        console.log('You cannot go this way');
        break;
      case 'Room B':
        this.roomA = true;
        break;
      case 'Room C':
        this.roomC = true;
        break;
      case 'Room D':
        this.roomD = true;
        break;
    }

  }


}

