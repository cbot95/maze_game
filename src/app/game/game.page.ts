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
        this.noPsg();
        break;
      case 'Room B':
        if (!this.trollA)  {
          this.playerScore = this.playerScore - 10;
          this.roomBlocked();
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
          this.playerScore = this.playerScore - 10;
          this.trollHere();
        } else if (!this.trollC) {
          this.playerScore = this.playerScore - 10;
          this.roomBlocked();
        } else {
          this.currRoom = 'Room C';
          this.roomB = false;
          this.newRoom();
        }
        break;
      case 'Room C':
        this.noPsg();
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
          this.trollHere();
          this.playerScore = this.playerScore - 10;
        } else {
          this.currRoom = 'Room B';
          this.roomA = false;
          this.newRoom();
        }
        break;
      case 'Room B':
        this.noPsg();
        break;
      case 'Room C':
        if (!this.trollC) {
          this.trollHere();
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
  }

  westPsg() {
    switch (this.currRoom) {
      case 'Room A':
        this.noPsg();
        break;
      case 'Room B':
        this.currRoom = 'Room D';
        this.roomB = false;
        this.newRoom();
        break;
      case 'Room C':
        this.noPsg();
        break;
      case 'Room D':
        if (!this.enemiesLeft) {
          this.isExit = true;
          console.log('Exit Reached!');
        } else {
          this.noPsg();
        }
    }
    this.roomNav();
  }

  // collect items

  collectCoin(){
    switch (this.currRoom) {
      case 'Room A':
        this.noCoin();
        break;
      case 'Room B':
        if (this.coinB === 0){
          this.noCoin();
        } else {
          this.playerScore = this.playerScore + this.coinB;
          this.addCoin();
          this.coinB = 0;
        }
        break;
      case 'Room C':
        if (this.coinC === 0){
          this.noCoin();
        } else {
          this.playerScore = this.playerScore + this.coinC;
          this.addCoin();
          this.coinC = 0;
        }
        break;
      case 'Room D':
        if (this.coinD === 0){
          this.noCoin();
        } else {
          this.playerScore = this.playerScore + this.coinD;
          this.addCoin();
          this.coinD = 0;
        }
    }
  }

  collectArrow(){
    switch (this.currRoom) {
      case 'Room A':
        if (this.arrowA === 0){
          this.arrowsCollected();
        } else {
          this.playerArrows = this.playerArrows + this.arrowA;
          this.addArrow();
          this.arrowA = 0;
        }
        break;
      case 'Room B':
        if (this.arrowB === 0){
          this.arrowsCollected();
        } else {
          this.playerArrows = this.playerArrows + 1;
          this.addArrow();
          this.arrowB = this.arrowB - 1;
        }
        break;
      case 'Room C':
        this.arrowsCollected();
        break;
      case 'Room D':
        this.arrowsCollected();
    }
  }
// defeat enemy

  attack() {
    if (this.playerArrows < 1 ){
      this.noArrows();
    } else {
      switch (this.currRoom) {
        case 'Room A':
          if (this.trollA){
            this.noTrolls();
          } else {
            this.playerArrows = this.playerArrows - 1;
            this.enemiesLeft = this.enemiesLeft - 1;
            this.trollA = true;
          }
          break;
        case 'Room B':
          if (this.trollB){
            this.noTrolls();
          } else {
            this.playerArrows = this.playerArrows - 1;
            this.enemiesLeft = this.enemiesLeft - 1;
            this.trollB = true;
          }
          break;
        case 'Room C':
          if (this.trollC){
            this.noTrolls();
          } else {
            this.playerArrows = this.playerArrows - 1;
            this.enemiesLeft = this.enemiesLeft - 1;
            this.trollC = true;
          }
          break;
          case 'Room D':
          this.noTrolls();
      }
    }

  }


  // Player notifications

  async newRoom() {
    const toast = await this.toastController.create({
      message: `You are now in '${this.currRoom}'`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async trollHere() {
    const toast = await this.toastController.create({
      message: `A troll is blocking this passage! -10 points.`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async roomBlocked() {
    const toast = await this.toastController.create({
      message: `A troll is blocking the next room! Go another way. -10 points.`,
      position: 'top',
      duration: 2500
    });
    toast.present();
  }

  async noPsg() {
    const toast = await this.toastController.create({
      message: `You cannot go that way`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async addCoin() {
    const toast = await this.toastController.create({
      message: `Coin Collected`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async noCoin() {
    const toast = await this.toastController.create({
      message: `There are no coins to collect`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async addArrow() {
    const toast = await this.toastController.create({
      message: `Arrow Collected!`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async arrowsCollected() {
    const toast = await this.toastController.create({
      message: `There are no arrows to collect`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async noArrows() {
    const toast = await this.toastController.create({
      message: `You Have no arrows!`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  async noTrolls() {
    const toast = await this.toastController.create({
      message: `You Have no arrows!`,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }


}

