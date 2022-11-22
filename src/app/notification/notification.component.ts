import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notify(){
    this.checkPermission().then(isAllowed => {
      if(!isAllowed) {
        Notification.requestPermission();
        return;
      }
      new Notification('Hi there',{
        body: 'Here is your notification!'
      });
    })
  }
  checkPermission(){
    return Notification.requestPermission().then(status => status === 'granted');
  }
}
