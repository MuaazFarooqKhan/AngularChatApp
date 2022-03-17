import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

  searchText: string = '';
  sendData = {
    channel: {
      label: '',
      value: ''
    },
    user: {
      label: '',
      value: ''
    },
    messages: [
      {
        id: 1, body: 'Glad to hear that', time: '8:21', me: false, channelId: 1,
        userId: 2
      },
      {
        id: 2, body: 'Glad hear that', time: '8:21', me: false, channelId: 2,
        userId: 1
      },
      {
        id: 3, body: 'Glad hear that', time: '8:21', me: false, channelId: 2,
        userId: 1
      },
      {
        id: 4, body: 'Glad to hear that', time: '8:21', me: false, channelId: 1,
        userId: 2
      },
    ],
  }
  userObjects = [
    { value: 1, label: 'Joyse' },
    { value: 2, label: 'Sam' },
    { value: 3, label: 'Russell' },
  ];
  channelObjects = [
    { value: 1, label: 'General Channel' },
    { value: 2, label: 'Technology Channel' },
    { value: 3, label: 'LGTM Channel' },
  ];

  constructor() { }

  ngOnInit(): void { }
  sendChannel(channelValue: any) {
    this.sendData.channel.label = channelValue.label
    this.sendData.channel.value = channelValue.value
    if (channelValue.check !== true) {
      this.conversationClicked.emit(this.sendData)
    }
    else {
      alert("Please select User")
    }
  }

  onChangeObj(userValue: any) {
    this.sendData.user.label = userValue.label
    this.sendData.user.value = userValue.value
    console.log(this.sendData)
  }
}
