import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor(public toastController: ToastController) { }

  currRoom;
  roomList = ['Room A', 'Room B', 'Room C', 'Room D'];
  roomA = false;
  roomB = false;
  roomC = false;
  roomD = false;

  playerScore = 0;
  playerArrows = 0;
  enemiesLeft = 3;

  arrowA = 1;
  arrowB = 2;
  coinB = 50;
  coinC = 100;
  coinD = 50;

  trollA = false;
  trollB = false;
  trollC = false;

  isExit = false;


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
        console.log('You cannot go here');
        break;
      case 'Room B':
        if (!this.trollA)  {
          console.log('A troll blocks the other side');
          this.playerScore = this.playerScore - 10;
        } else {
          this.currRoom = 'Room A';
          this.roomB = false;
          this.newRoom();
        }
        break;
      case 'Room C':
        this.currRoom = 'Room D';
        this.roomC = false;
        this.newRoom();
        break;
      case 'Room D':
        this.currRoom = 'Room A';
        this.roomD = false;
        this.newRoom();
    }
    this.roomNav();
    console.log(this.currRoom);
  }

  southPsg() {
    switch (this.currRoom) {
      case 'Room A':
        this.currRoom = 'Room D';
        this.roomA = false;
        this.newRoom();
        break;
      case 'Room B':
        if (!this.trollB) {
          console.log(' a troll blocks this passage');
          this.playerScore = this.playerScore - 10;
        } else if (!this.trollC) {
          console.log('A troll is in the other room');
          this.playerScore = this.playerScore - 10;
        } else {
          this.currRoom = 'Room C';
          this.roomB = false;
          this.newRoom();
        }
        break;
      case 'Room C':
        console.log('You cannot go here');
        break;
      case 'Room D':
        this.currRoom = 'Room C';
        this.roomD = false;
        this.newRoom();
    }
    this.roomNav();
  }

  eastPsg() {
    switch (this.currRoom) {
      case 'Room A':
        if (!this.trollA) {
          console.log('A troll is blocking this passage');
          this.playerScore = this.playerScore - 10;
        } else {
          this.currRoom = 'Room B';
          this.roomA = false;
          this.newRoom();
        }
        break;
      case 'Room B':
        console.log('You cannot go this way');
        break;
      case 'Room C':
        if (!this.trollC) {
          console.log('A troll is blocking this passage');
          this.playerScore = this.playerScore - 10;
        } else {
          this.currRoom = 'Room B';
          this.roomC = false;
          this.newRoom();
        }
        break;
      case 'Room D':
        this.currRoom = 'Room B';
        this.roomD = false;
        this.newRoom();
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
        this.currRoom = 'Room D';
        this.roomB = false;
        this.newRoom();
        break;
      case 'Room C':
        console.log('You cannot go here');
        break;
      case 'Room D':
        if (!this.enemiesLeft) {
          this.isExit = true;
          console.log('Exit Reached!');
        } else {
          console.log('You cannot go here');
        }
    }
    this.roomNav();
    console.log(this.currRoom);
  }

  // collect items

  collectCoin(){
    switch (this.currRoom) {
      case 'Room A':
        console.log('There are no coins');
        break;
      case 'Room B':
        if (this.coinB === 0){
          console.log('There are no coins');
        } else {
          this.playerScore = this.playerScore + this.coinB;
          this.coinB = 0;
        }
        break;
      case 'Room C':
        if (this.coinC === 0){
          console.log('There are no coins');
        } else {
          this.playerScore = this.playerScore + this.coinC;
          this.coinC = 0;
        }
        break;
      case 'Room D':
        if (this.coinD === 0){
          console.log('There are no coins');
        } else {
          this.playerScore = this.playerScore + this.coinD;
          this.coinD = 0;
        }
    }
    console.log(this.playerScore);
  }

  collectBomb(){
    switch (this.currRoom) {
      case 'Room A':
        if (this.arrowA === 0){
          console.log('All bombs collected');
        } else {
          this.playerArrows = this.playerArrows + this.arrowA;
          this.arrowA = 0;
        }
        break;
      case 'Room B':
        if (this.arrowB === 0){
          console.log('There are no arrows');
        } else {
          this.playerArrows = this.playerArrows + 1;
          this.arrowB = this.arrowB - 1;
        }
        break;
      case 'Room C':
        console.log('There are no bombs here');
        break;
      case 'Room D':
        console.log('There are no bombs here');
    }
  }
// defeat enemy

  attack() {
    if (this.playerArrows < 1 ){
      console.log('You have no bombs');
    } else {
      switch (this.currRoom) {
        case 'Room A':
          if (this.trollA){
            console.log('No trolls in this room');
          } else {
            this.playerArrows = this.playerArrows - 1;
            this.enemiesLeft = this.enemiesLeft - 1;
            this.trollA = true;
          }
          break;
        case 'Room B':
          if (this.trollB){
            console.log('There are no trolls in this room');
          } else {
            this.playerArrows = this.playerArrows - 1;
            this.enemiesLeft = this.enemiesLeft - 1;
            this.trollB = true;
          }
          break;
        case 'Room C':
          if (this.trollC){
            console.log('There are no trolls in this room');
          } else {
            this.playerArrows = this.playerArrows - 1;
            this.enemiesLeft = this.enemiesLeft - 1;
            this.trollC = true;
          }
          break;
          case 'Room D':
          console.log('There are no trolls');
      }
    }

  }

  async newRoom() {
    const toast = await this.toastController.create({
      message: `You are now in '${this.currRoom}'`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

}

