import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor() {
    this.setCountdown();
  }

  private setCountdown = () => {
    const finalDate = new Date('05-30-2020'),
      finalDateTime = finalDate.getTime();

    let  currentDate = null,
      currentDateTime = 0,
      difference = 0;

    setInterval(() => {
      currentDate = new Date();
      currentDateTime = currentDate.getTime();

      difference = finalDateTime - currentDateTime;

      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((difference / 1000 / 60) % 60);
      this.seconds = Math.floor((difference / 1000) % 60);
    }, 1000);
  }

  ngOnInit(): void {
  }

}
