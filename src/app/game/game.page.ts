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
   console.log(this.currRoom);
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
        console.log('You cannot go here');
        break;
      case 'Room B':
        console.log('you have moved to room A');
        this.currRoom = 'Room A';
        this.roomB = false;
        break;
      case 'Room C':
        console.log('you have moved to room D');
        this.currRoom = 'Room D';
        this.roomC = false;
        break;
      case 'Room D':
        console.log('you have moved to room A');
        this.currRoom = 'Room A';
        this.roomD = false;
    }
    this.roomNav();
    console.log(this.currRoom);
  }

  southPsg() {
    switch (this.currRoom) {
      case 'Room A':
        this.currRoom = 'Room D';
        this.roomA = false;
        console.log('you have moved to room D');
        break;
      case 'Room B':
        console.log('you have moved to room C');
        this.currRoom = 'Room C';
        this.roomB = false;
        break;
      case 'Room C':
        console.log('You cannot go here');
        break;
      case 'Room D':
        console.log('you have moved to room C');
        this.currRoom = 'Room C';
        this.roomD = false;
    }
    this.roomNav();
    console.log(this.currRoom);
  }

  eastPsg() {
    switch (this.currRoom) {
      case 'Room A':
        this.currRoom = 'Room B';
        this.roomA = false;
        console.log('you have moved to room B');
        break;
      case 'Room B':
        console.log('You cannot go this way');
        break;
      case 'Room C':
        this.currRoom = 'Room B';
        this.roomC = false;
        console.log('you have moved to room B');
        break;
      case 'Room D':
        console.log('you have moved to room B');
        this.currRoom = 'Room B';
        this.roomD = false;
    }
    this.roomNav();
    console.log(this.currRoom);
  }

  westPsg() {
    switch (this.currRoom) {
      case 'Room A':
        console.log('You cannot go here');
        break;
      case 'Room B':
        console.log('you have moved to room D');
        this.currRoom = 'Room D';
        this.roomB = false;
        break;
      case 'Room C':
        console.log('You cannot go here');
        break;
      case 'Room D':
        console.log('the exit');
    }
    this.roomNav();
    console.log(this.currRoom);
  }



}

