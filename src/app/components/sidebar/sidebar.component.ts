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
        id: 0, body: '', time: '', me: false, channelId: 1,
        userId: 2
      }
    ],
  }
  userObjects = [
    { value: "Joyse", label: 'Joyse' },
    { value: "Sam", label: 'Sam' },
    { value: "Russell", label: 'Russell' },
  ];
  channelObjects = [
    { value: "1", label: 'General Channel' },
    { value: "2", label: 'Technology Channel' },
    { value: "3", label: 'LGTM Channel' },
  ];

  constructor() {
    this.sendData.messages =[
      {
        id: 0, body: '', time: '', me: false, channelId: 1,
        userId: 2
      }
    ]
  }

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
