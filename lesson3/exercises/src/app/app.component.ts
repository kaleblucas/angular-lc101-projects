import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  flightHeight = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  throwMessage(button){
    if (button === "takeoff"){
      return window.confirm("Confirm that the shuttle is ready for takeoff.")
    };
    if (button === "land"){
      return window.alert("The shuttle is landing. Landing gear engaged.")
    };
    if (button === "abort"){
      return window.confirm("Are you sure you would like to abort the mission?")
    };
  }
  takeoffShuttle(){
    if (this.throwMessage('takeoff')){
      this.color = 'blue';
      this.flightHeight += 10000;
      this.message = 'Shuttle in flight';
    }
  }
  landShuttle(){
    this.throwMessage('land');
    this.color = 'green';
    this.flightHeight = 0;
    this.message = 'The shuttle has landed';
  }
  abortMission(){
    if (this.throwMessage('abort')){
      this.color = 'red';
      this.flightHeight += 0;
      this.message = 'Mission aborted';
    }
  }
  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000
    }

    if (direction === 'up' && this.flightHeight < 330000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.flightHeight = this.flightHeight + 10000
    }
    if (direction === 'down' && this.flightHeight >= 10000) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.flightHeight = this.flightHeight - 10000
    }
  }
}
